<?php

SCV_Setup::get_instance();
class SCV_Setup {

	/**
	 * @var
	 */
	protected static $_instance;

	/**
	 * Only make one instance of the SCV_Setup
	 *
	 * @return SCV_Setup
	 */
	public static function get_instance() {
		if ( ! self::$_instance instanceof SCV_Setup ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Add Hooks and Actions
	 */
	protected function __construct() {
		$this->includes();
		$this->add_actions();
		$this->add_filters();
	}

	protected function includes() {
		require_once get_stylesheet_directory() . '/inc/member-levels.php';
		require_once get_stylesheet_directory() . '/inc/public-studies.php';
		require_once get_stylesheet_directory() . '/inc/email-answers.php';
	}

	/**
	 * Wire up actions
	 */
	protected function add_actions() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue' ) );
	}

	protected function add_filters() {
		add_filter( 'sc_everyone_can_add_studies', '__return_false' );
		add_filter( 'sc_study_show_print', '__return_false' );
	}

	/**
	 * Enqueue styles and scripts
	 */
	public function enqueue() {
		$this->enqueue_scripts();
		$this->enqueue_styles();
	}

	/**
	 * Enqueue Styles
	 */
	protected function enqueue_styles() {
		$postfix = ( defined( 'SCRIPT_DEBUG' ) && true === SCRIPT_DEBUG ) ? '' : '.min';
	}

	/**
	 * Enqueue scripts
	 */
	protected function enqueue_scripts() {
		$postfix = ( defined( 'SCRIPT_DEBUG' ) && true === SCRIPT_DEBUG ) ? '' : '.min';
	}

}