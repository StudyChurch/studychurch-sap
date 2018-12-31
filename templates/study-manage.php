<?php

/*
 * Template Name: Study Manage
 */

use StudyChurch\Study\Edit;

$action   = sc_get( 'action', 'edit' );
$study_id = absint( sc_get( 'study', 0 ) );
$item_id  = absint( sc_get( 'item', $study_id ) );
$item     = ( $item_id ) ? get_post( $item_id ) : new WP_Post( array() );

$types = array(
	'question_short' => __( 'Short Answer Question', 'sc' ),
	'question_long'  => __( 'Long Answer Question', 'sc' ),
	'content'        => __( 'Content', 'sc' ),
	'assignment'     => __( 'Assignment', 'sc' ),
);

add_filter( 'single_post_title', function( $title ) {
	if ( $study_id = absint( sc_get( 'study', 0 ) ) ) {
		$title = 'EDITING: ' . get_the_title( $study_id );
	}

	return $title;
} );

get_header(); ?>
	<div id="studyapp" data-study="<?php echo esc_attr( $study_id ); ?>" data-user="<?php echo get_current_user_id(); ?>" style="margin-top: -6rem;">
		<div id="main" class="site-main">

			<?php do_action( 'sc_study_edit_messages', $study_id ); ?>

			<div id="primary" class="content-area primary-sidebar">
				<div id="content" class="site-content container" role="main">
					<?php get_template_part( 'partials/study-edit', Edit::get_current_step( $study_id ) ); ?>
				</div><!-- #content .site-content -->
			</div><!-- #primary .content-area -->

			<?php if ( Edit::step_has_sidebar() ) : ?>
				<div id="secondary-page" style="background:transparent;">
					<?php do_action( 'sc_study_edit_sidebar_before', $study_id ); ?>

					<a href="<?php echo add_query_arg( array(
						'action' => 'edit',
						'study'  => absint( $study_id ),
						'step'   => 'study'
					), get_the_permalink() ); ?>" class="right"><i class="fa fa-pencil"></i></a>

					<h3><?php echo get_the_title( $study_id ); ?></h3>

					<ul id="chapter-list" class="table-of-contents chapter-list"></ul>

					<p>
						<a href="#" id="new-chapter" class="ucase small"><i class="fa fa-plus-circle"></i> <?php _e( 'Create New Chapter', 'sc' ); ?>
						</a>
					</p>

					<a href="<?php echo get_the_permalink( $study_id ); ?>" class="button expand small"><?php _e( 'View this study', 'sc' ); ?></a>

				</div><!-- #secondary -->
			<?php endif; ?>

		</div>
	</div>
<?php get_footer(); ?>