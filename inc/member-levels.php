<?php

SCV_Member_Levels::get_instance();
class SCV_Member_Levels {

	/**
	 * @var
	 */
	protected static $_instance;

	/**
	 * Only make one instance of the SCV_Member_Levels
	 *
	 * @return SCV_Member_Levels
	 */
	public static function get_instance() {
		if ( ! self::$_instance instanceof SCV_Member_Levels ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Add Hooks and Actions
	 */
	protected function __construct() {
		add_action( 'sc_before_member_sidebar', array( $this, 'member_level_form' ) );
		add_action( 'init',                     array( $this, 'maybe_update_member_level' ) );
		add_action( 'admin_init',               array( $this, 'add_leader_role'           ) );
	}

	public function member_level_form() {
		if ( bp_is_my_profile() || ! current_user_can( 'promote_users' ) ) {
			return;
		}

		$user = get_userdata( bp_displayed_user_id() );
		$role = array_shift( $user->roles );
		?>

		<form action="" method="post">

			<p><?php _e( 'This member is a:', 'sc' ); ?></p>
			<ul>
				<li><label><input type="radio" name="member-level" <?php checked( 'subscriber', $role ); ?> value="subscriber" />&nbsp;&nbsp;<?php _e( 'Participant', 'sc' ); ?></label></li>
				<li><label><input type="radio" name="member-level" <?php checked( 'leader', $role ); ?> value="leader" />&nbsp;&nbsp;<?php _e( 'Group Leader', 'sc' ); ?></label></li>
				<li><label><input type="radio" name="member-level" <?php checked( 'editor', $role ); ?> value="editor" />&nbsp;&nbsp;<?php _e( 'Study Author', 'sc' ); ?></label></li>
				<li><label><input type="radio" name="member-level" <?php checked( 'administrator', $role ); ?> value="administrator" />&nbsp;&nbsp;<?php _e( 'Administrator', 'sc' ); ?></label></li>
			</ul>

			<?php wp_nonce_field( 'sc_update_member_level', 'member_level_nonce' ); ?>
			<input type="submit" class="button tiny expand" value="<?php _e( 'Update Member', 'sc' ); ?>" />
		</form>
		<?php
	}

	public function maybe_update_member_level() {

		if ( empty( $_POST['member_level_nonce'] ) ) {
			return;
		}

		if ( bp_is_my_profile() ) {
			return;
		}

		if ( ! wp_verify_nonce( $_POST['member_level_nonce'], 'sc_update_member_level' ) ) {
			bp_core_add_message( 'Something went wrong, please try again', 'error' );
			return;
		}

		$displayed_user = get_userdata( bp_displayed_user_id() );

		$roles = array_keys( wp_roles()->roles );

		if ( ! in_array( $_POST['member-level'], $roles ) ) {
			bp_core_add_message( 'That membership level doesn\'t exist.', 'error' );
			return;
		}

		$displayed_user->set_role( $_POST['member-level'] );

		bp_core_add_message( 'Member updated.', 'success' );

	}

	public function add_leader_role() {

		if ( 2 === get_option( 'sc_updated_roles' ) ) {
			return;
		}

		add_role( 'leader', __( 'Leader', 'sc' ), array( 'read' => true, 'manage_groups' => true ) );
		add_role( 'organization', __( 'Organization', 'sc' ), array( 'read' => true, 'manage_groups' => true ) );

		$roles = wp_roles();

		foreach( $roles->role_objects as $role ) {
			if ( 'subscriber' != $role->name ) {
				$role->add_cap( 'manage_groups' );
			}
		}

		update_option( 'sc_updated_roles', 2, 'no' );

	}
}