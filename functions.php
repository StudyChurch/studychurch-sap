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
		require_once get_stylesheet_directory() . '/vendor/autoload.php';
		require_once get_stylesheet_directory() . '/inc/member-levels.php';
		require_once get_stylesheet_directory() . '/inc/public-studies.php';
		require_once get_stylesheet_directory() . '/inc/email-answers.php';

		StudyChurchSAP\CSVImport::get_instance();
		StudyChurchSAP\AutoAssignments::get_instance();
	}

	/**
	 * Wire up actions
	 */
	protected function add_actions() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue' ) );
		add_action( 'wp_footer', array( $this, 'reftagger' ) );
	}

	protected function add_filters() {
		add_filter( 'sc_everyone_can_add_studies', '__return_false' );
		add_filter( 'sc_froala_key', array( $this, 'froala_key' ) );
		add_filter( 'template_include', array( $this, 'app_template' ) );
//		add_filter( 'sc_new_group_link', '__return_true' );
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

	public function froala_key( $key ) {
		return ( $this->is_dev() ) ? 'lC5D4A3B1uF2C1C1I2A10C1D6A1D6F5hfugquD-11iupB2sobco==' : 'rB1G1I1A2sE7D7B5G4A1I4H4C3B6B5fhC-9mwsgsknF4rvbfnceiF5mh1A-7==';
	}

	public static function is_dev() {
		return ( defined( 'WP_DEBUG' ) && WP_DEBUG );
	}

	public function reftagger() {
		?>
		<script src="https://www.biblegateway.com/public/link-to-us/tooltips/bglinks.js" type="text/javascript"></script>
		<script type="text/javascript">
          BGLinks.version = 'ASV';
          BGLinks.linkVerses();
		</script>
		<?php
	}

	public function app_template( $template ) {

		if ( ! is_user_logged_in() ) {
			return $template;
		}

		if ( in_array( $_SERVER['REQUEST_URI'], array( '/' ) ) ) {
			return get_stylesheet_directory() . '/app.php';
		}

		if ( strpos( $_SERVER['REQUEST_URI'], 'groups/' ) ) {
			return get_stylesheet_directory() . '/app.php';
		}

		if ( strpos( $_SERVER['REQUEST_URI'], 'studies/' ) ) {
			return get_stylesheet_directory() . '/app.php';
		}

		return $template;
	}
}
