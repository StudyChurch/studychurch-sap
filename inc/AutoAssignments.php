<?php
namespace StudyChurchSAP;

use StudyChurch\Assignments\Notifications;
use DateTime;
use DateTimeZone;

class AutoAssignments {

	/**
	 * @var
	 */
	protected static $_instance;

	/**
	 * Only make one instance of the AutoAssignments
	 *
	 * @return AutoAssignments
	 */
	public static function get_instance() {
		if ( ! self::$_instance instanceof AutoAssignments ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Add Hooks and Actions
	 */
	protected function __construct() {
		add_action( 'sc_group_study_update', array( $this, 'maybe_schedule_assignments' ), 10, 2 );
		add_action( 'admin_init', array( $this, 'setup_schedule' ) );
		add_action( 'init', array( $this, 'handle_legacy_groups' ), 999 );

		add_action( 'sc_sap_auto_assignments', array( $this, 'handle_scheduled_assignments' ) );
	}

	/**
	 * If the studies added to this group are part of the OTD studies, make sure we schedule the days to auto assign
	 *
	 * @param $group_id
	 * @param $studies
	 *
	 * @author Tanner Moushey
	 */
	public function maybe_schedule_assignments( $group_id, $studies ) {

		if ( empty( $studies ) ) {
			return;
		}

		$scheduled_assignments = get_option( 'sc_scheduled_assignments', array() );

		foreach ( $studies as $study ) {
			if ( ! has_term( 'otd', 'sc_category', $study ) ) {
				continue;
			}

			// don't schedule studies that we've already processed
			if ( isset( $scheduled_assignments[ $group_id ][ $study ] ) ) {
				continue;
			}

			$days = sc_study_get_navigation( $study );

			foreach( $days as $day ) {
				$meta = get_post_meta( $day->ID, 'sc_study_meta', true );

				if ( empty( $meta['Devo Date'] ) ) {
					continue;
				}

				$scheduled_assignments[ $group_id ][ $study ][ $day->ID ] = strtotime( str_replace( '.', '/', $meta['Devo Date'] ) );
			}
		}

		update_option( 'sc_scheduled_assignments', $scheduled_assignments, false );

	}

	/**
	 * Handle scheduled event for auto assignments
	 *
	 * @author Tanner Moushey
	 */
	public function handle_scheduled_assignments() {
		$scheduled_assignments = get_option( 'sc_scheduled_assignments', array() );

		if ( empty( $scheduled_assignments ) ) {
			return;
		}

		remove_action( 'sc_assignment_create', array(
			Notifications::get_instance(),
			'new_assignment'
		), 10 );

		foreach ( $scheduled_assignments as $group_id => $studies ) {
			foreach ( $studies as $study_id => $days ) {
				foreach ( $days as $day_id => $date ) {

					if ( ! $timezone = get_option( 'timezone_string', 'America/Los_Angeles' ) ) {
						$timezone = 'America/Los_Angeles';
					}

					$date = new DateTime( date( 'Y-m-d', $date ), new DateTimeZone( $timezone ) );

					// don't process anything later than today
					if ( $date->format( 'U' ) > time() ) {
						continue;
					}

					unset( $scheduled_assignments[ $group_id ][ $study_id ][ $day_id ] );

					// if this assignment is more than a day old, don't process
					$date->modify( '+ 1 day' );
					if ( $date->format( 'U' ) < time() ) {
						continue;
					}

					$date->modify( '- 1 day' );

					$assignment = [
						'lessons' => [ $day_id ],
						'content' => '',
						'date'    => $date->format( 'Y-m-d ' ),
					];

					sc_add_group_assignment( $assignment, $group_id, true );

				}
			}
		}

		update_option( 'sc_scheduled_assignments', $scheduled_assignments, false );

		add_action( 'sc_assignment_create', array(
			Notifications::get_instance(),
			'new_assignment'
		), 10, 2 );
	}

	/**
	 * Setup schedule for auto assign
	 *
	 * @author Tanner Moushey
	 */
	public function setup_schedule() {
		if ( wp_next_scheduled( 'sc_sap_auto_assignments' ) ) {
			return;
		}

		wp_schedule_event( time(), 'hourly', 'sc_sap_auto_assignments' );
	}

	/**
	 * Run this once to make sure we auto schedule assignments for legacy groups.
	 *
	 * @author Tanner Moushey
	 */
	public function handle_legacy_groups() {
		if ( empty( $_GET['handle-legacy-groups'] ) ) {
			return;
		}

		$bp = buddypress();
		global $wpdb;


		$groups = $wpdb->get_results( "SELECT * FROM  {$bp->table_prefix}bp_groups_groupmeta WHERE `meta_key` = '_sc_study'" );

		foreach( $groups as $meta ) {
			$studies = (array) maybe_unserialize( $meta->meta_value );
			$this->maybe_schedule_assignments( $meta->group_id, $studies );
		}

		do_action( 'sc_sap_auto_assignments' );
	}

}