<?php

namespace StudyChurchSAP;

CSVImport::get_instance();

class CSVImport {

	/**
	 * @var
	 */
	protected static $_instance;

	/**
	 * Only make one instance of the CSVImport
	 *
	 * @return CSVImport
	 */
	public static function get_instance() {
		if ( ! self::$_instance instanceof CSVImport ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Add Hooks and Actions
	 */
	protected function __construct() {
		add_action( 'admin_menu', array( $this, 'submenu_page' ) );
		add_action( 'pre_get_posts', array( $this, 'only_studies' ) );
	}

	public function only_studies( $query ) {
		if ( ! is_admin() ) {
			return;
		}

		if ( isset( $_GET['post_type'] ) && 'sc_study' == $_GET['post_type'] ) {
			$study = empty( $_GET['study'] ) ? 0 : absint( $_GET['study'] );
			$query->set( 'post_parent', $study );
		}

	}

	public function submenu_page() {
		add_submenu_page( 'edit.php?post_type=sc_study', __( 'Import Study' ), __( 'Import Study' ), 'edit_posts', 'import-study-csv', array(
			$this,
			'import_study_cb'
		) );
	}

	public function import_study_cb() {
		?>
		<div class="wrap">
			<h2>Import Study</h2>

			<form method="post" action="" id="sc-study-import" enctype="multipart/form-data">

				<table class="form-table">
					<tbody>
					<tr>
						<th scope="row"><label for="sc-study-title">Study Title</label></th>
						<td><input type="text" id="sc-study-title" name="sc-study-title" class="regular-text" /></td>
					</tr>
					<tr>
						<th scope="row"><label for="sc-study-desc">Study Description</label></th>
						<td><textarea id="sc-study-desc" name="sc-study-desc" class="large-text" rows="10" cols="50"></textarea></td>
					</tr>
					<tr>
						<th scope="row"><label for="sc-study-csv">CSV File</label></th>
						<td><input type="file" accept=".csv, text/csv" name="sc-study-csv" id="sc-study-csv" /></td>
					</tr>
					</tbody>
				</table>

				<p>
					<?php wp_nonce_field( 'sc-study-import' ); ?>
					<?php submit_button( 'Import CSV' ); ?>
				</p>


			</form>
		</div>
		<?php

		echo $this->maybe_import_study();

	}


	/**
	 * Import CSV
	 *
	 * CSV data:
	 *  array(
	 *      'Devo Date'    => '06.01.18',
	 *      'Devo Day'     => 'Friday',
	 *      'Passage'      => 'Exodus 2:11-25',
	 *      'Xtra Reading' => 'Exodus 2',
	 *      'Title'        => 'Prayer',
	 *      'Devo Thought' => 'Have you ever prayed about something for a long time without receiving an answer? Did that discourage you enough to just quit praying?  If so, you might be able to identify with the circumstances in this passage. Do you remember God’s promise to Abraham in Genesis (Genesis 12:1-7 and Genesis 15:1-7)?  First, God promised a multitude of descendants.  Second, He promised to bless the nation of Israel. Finally, He promised to lead His people to a specific land in which they would live.  These chapters indicate that God was already miraculously fulfilling the “people” part of His promise.  We also see that God was preparing to use one particular man to lead this nation to receive the “land” part of His promise.  It had been a long time, 400 years in fact, since Jacob and his family moved to Egypt.   But we can see that God had not forgotten His Word (2:24).  His promise was still being fulfilled.  Do you have a burden or need you have been going to God about for a lengthy amount of time?  Does it seem as if He has not been listening? Keep praying and, like in this example,  He will fulfill His promise.',
	 *      'Say What?'    => 'Observation: What do I see?',
	 *      'So What?'     => 'Interpretation: What does it mean?',
	 *      'Now What?'    => 'Application: How does it apply to me?',
	 *      'Then What?'   => 'Implementation: What do I do?',
	 *      'Memory Verse' => '',
	 * )
	 *
	 * @return string
	 * @author Tanner Moushey
	 */
	protected function maybe_import_study() {

		if ( empty( $_POST['_wpnonce' ] ) || empty( $_FILES['sc-study-csv'] ) ) {
			return '';
		}

		if ( ! wp_verify_nonce( $_POST['_wpnonce'], 'sc-study-import' ) ) {
			return 'something went wrong, please try again.';
		}

		if ( empty( $_POST['sc-study-title'] ) ) {
			return 'Please add a title to the study';
		}

		if ( ! class_exists( 'parseCSV' ) ) {
			require_once( get_stylesheet_directory() . '/lib/parsecsv.lib.php' );
		}

		$import_file = ! empty( $_FILES['sc-study-csv'] ) ? $_FILES['sc-study-csv']['tmp_name'] : false;

		if ( ! $import_file ) {
			return 'Please use a valid csv';
		}

		$csv  = new \parseCSV( $import_file );
		$days = $csv->data;

		$study = wp_insert_post( array(
			'post_type'    => 'sc_study',
			'post_title'   => sanitize_text_field( $_POST['sc-study-title'] ),
			'post_content' => empty( $_POST['sc-study-desc'] ) ? '' : wp_kses_post( $_POST['sc-study-desc'] ),
		    'post_status'  => 'private',
		) );

		if ( ! $study ) {
			return 'something went wrong when creating the new study';
		}

		printf( '<p>Created study: %s</p>', get_the_title( $study ) );

		$chapter_order = 0;

		foreach ( $days as $day ) {

			// Skip if all fields are empty.
			if ( ! array_filter( $day ) ) {
				continue;
			}

			$chapter_date  = strtotime( str_replace( '.', '/', $day['Devo Date'] ) );
			$chapter_title = sprintf( '%s | %s', date( 'M j', $chapter_date ), $day['Passage'] );

			$chapter = wp_insert_post( array(
				'post_type'   => 'sc_study',
				'post_status' => 'publish',
				'post_title'  => $chapter_title,
				'post_parent' => $study,
				'menu_order'  => $chapter_order ++,
				'meta_input'  => array(
					'sc_study_meta' => $day
				),
			) );

			if ( ! $chapter ) {
				continue;
			}

			printf( '<p>--- Created day: %s</p>', get_the_title( $chapter ) );

			$study_part_keys = array( 'Memory Verse', 'Title', 'Devo Thought', 'Say What?', 'So What?', 'Now What?', 'Then What?' );
			$menu_order      = 0;

			foreach( $study_part_keys as $key ) {

				if ( empty( $day[ $key ] ) ) {
					continue;
				}

				$type = 'question_short';
				$content = sprintf( '<strong>%s |</strong> %s', $key, $day[ $key ] );

				switch( $key ) {
					case 'Title':
						$content = sprintf( '<h3>%s</h3>', $day[ $key ] );
						$type    = 'content';
						break;
					case 'Memory Verse':
						$type = 'content';
						break;
					case 'Devo Thought':
						$content = $day[ $key ];
						$type    = 'content';
						break;
				}

				$part = wp_insert_post( array(
					'post_status' => 'publish',
					'post_type'    => 'sc_study',
					'post_content' => wp_kses_post( $content ),
					'menu_order'   => $menu_order ++,
					'post_parent'  => $chapter,
					'meta_input'   => array(
						'_sc_data_type' => $type,
						'_sc_privacy'   => 'public'
					),
				) );

				if ( ! $part ) {
					continue;
				}

				printf( '<p>--- --- Created day part: %s</p>', $key );

			}

		}

		return sprintf( 'Done! You can <a href="%s">view your study here</a> or <a href="%s">edit it here</a>.', get_permalink( $study ), '/study-edit/?action=edit&study=' . $study );
	}

}