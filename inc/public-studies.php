<?php

SCV_Public_Studies::get_instance();
class SCV_Public_Studies {

	/**
	 * @var
	 */
	protected static $_instance;

	protected static $_message = '';

	protected static $_type = 'error';

	/**
	 * Only make one instance of the SCV_Public_Studies
	 *
	 * @return SCV_Public_Studies
	 */
	public static function get_instance() {
		if ( ! self::$_instance instanceof SCV_Public_Studies ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Add Hooks and Actions
	 */
	protected function __construct() {
		add_action( 'sc_study_edit_sidebar_before', array( $this, 'study_status' ) );
		add_action( 'template_redirect',            array( $this, 'update_status' ) );
		add_action( 'sc_study_edit_messages',       array( $this, 'maybe_add_messages' ) );

		add_filter( 'sc_answer_is_private', array( $this, 'private_individual_answers' ) );
		add_filter( 'sc_allow_personal_studies', '__return_true' );
	}

	/**
	 * Enable private answers for individuals
	 *
	 * @param $is_private
	 *
	 * @return bool
	 */
	public function private_individual_answers( $is_private ) {
		$doing_ajax = ( defined( 'DOING_AJAX' ) && DOING_AJAX );
		if ( ! ( is_singular( 'sc_study' ) || $doing_ajax ) ) {
			return $is_private;
		}

		if ( ! bp_get_group_id() ) {
			$is_private = true;
		}

		return $is_private;
	}

	public function study_status( $study_id ) {
		if ( 'private' == get_post_status( $study_id ) ) : ?>
			<p class="description"><i class="fa fa-lock"></i> <?php _e( 'This study is private, only you can use it as a group study.', 'sc' ); ?> <a href="<?php echo add_query_arg( array( 'action' => 'publish', 'study' => $study_id, 'nonce' => wp_create_nonce( 'publish-study' ) ), get_the_permalink() ); ?>"><?php _e( 'Publish this study.', 'sc' ); ?></a></p>
		<?php elseif ( 'publish' == get_post_status( $study_id ) ) : ?>
			<p class="description"><?php _e( 'This study is publicly available to everyone.', 'sc' ); ?> <a href="<?php echo add_query_arg( array( 'action' => 'private', 'study' => $study_id, 'nonce' => wp_create_nonce( 'publish-study' ) ), get_the_permalink() ); ?>"><?php _e( 'Make this study private.', 'sc' ); ?></a></p>
		<?php endif;
	}

	public function update_status() {

		if ( ! is_page( 'study-edit' ) ) {
			return;
		}

		$study_id = sc_get( 'study' );
		$action   = sc_get( 'action' );
		$nonce    = sc_get( 'nonce' );

		// make sure we have all of our variables
		if ( empty( $study_id ) || empty( $action ) || empty( $nonce ) ) {
			return;
		}

		if ( ! in_array( $action, array( 'publish', 'private' ) ) ) {
			return;
		}

		if ( ! wp_verify_nonce( $nonce, 'publish-study' ) ) {
			self::$_message = 'Something went wrong, please try again.';
			return;
		}

		$id = wp_update_post( array( 'ID' => $study_id, 'post_status' => $action ), true );

		if ( is_wp_error( $id ) ) {
			self::$_message = $id->get_error_message();
			return;
		}

		self::$_message = 'Study updated.';
		self::$_type    = 'success';

	}

	public function maybe_add_messages() {
		if ( ! self::$_message ) {
			return;
		} ?>

		<div id="buddypress" class="small-12 column ">
			<div id="message" class="<?php echo esc_attr( self::$_type ); ?>">
				<p><?php echo esc_html( self::$_message ); ?></p>
			</div>
		</div>
		<?php
	}

}