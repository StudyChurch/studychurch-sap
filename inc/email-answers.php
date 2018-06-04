<?php

SCV_Email_Answers::get_instance();
class SCV_Email_Answers {

	/**
	 * @var
	 */
	protected static $_instance;

	/**
	 * Only make one instance of the SCV_Email_Answers
	 *
	 * @return SCV_Email_Answers
	 */
	public static function get_instance() {
		if ( ! self::$_instance instanceof SCV_Email_Answers ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Add Hooks and Actions
	 */
	protected function __construct() {
		add_action( 'sc_study_chapter_after', array( $this, 'email_answers_form' ) );
		add_action( 'sc_ajax_form_email_answers', array( $this, 'email_answers' ) );
	}

	public function email_answers_form( $study_id ) {
		$elements = new WP_Query( array(
			'post_type'      => 'sc_study',
			'post_parent'    => get_the_ID(),
			'meta_key'       => '_sc_data_type',
			'posts_per_page' => 9999,
			'orderby'        => 'menu_order',
			'order'          => 'ASC',
		) );

		// make sure we have comment material
		if( ! $elements->have_posts() ) {
			return;
		}

		$user = wp_get_current_user();
		?>
		<hr />
		<p>Email these answers to:</p>
		<form action="" method="post" class="ajax-form">
			<input type="email" name="email" value="<?php echo $user->user_email; ?>" />
			<input type="hidden" name="action" value="email_answers" />
			<input type="hidden" name="chapter_id" value="<?php the_ID(); ?>" />
			<?php wp_nonce_field( 'sc_email_answers', 'sc_email_answers_nonce' ); ?>
			<input type="submit" class="button expand small" value="<?php _e( 'Email Answers', 'sc' ); ?>" />
		</form>
		<?php
	}

	public function email_answers( $data ) {

		$return = array();

		if ( empty( $data['chapter_id'] ) || empty( $data['sc_email_answers_nonce'] ) ) {
			wp_send_json_error();
		}

		if ( empty( $data['email'] ) || ! is_email( $data['email'] ) ) {
			$return['message'] = 'Please enter a valid email address';
			wp_send_json_error( $return );
		}

		if ( ! $content = $this->generate_email( absint( $data['chapter_id'] ) ) ) {
			$return['message'] = 'Please answer some questions first.';
			wp_send_json_error( $return );
		}

		$content = sprintf( '<p>Here are your answers from <a href="%s">%s</a>:</p>%s', get_the_permalink( $data['chapter_id'] ), get_the_title( $data['chapter_id'] ), $content );

		$subject = sprintf( 'Your answers from %s', get_the_title( $data['chapter_id'] ) );

		if ( wp_mail( $data['email'], $subject, $content ) ) {
			$return['message'] = 'Success! Email sent.';
			wp_send_json_success( $return );
		} else {
			wp_send_json_error();
		}

	}

	public function generate_email( $study_id ) {

		SC_Study::get_instance()->setup_study_group( $study_id );

		$elements = new WP_Query( array(
			'post_type'      => 'sc_study',
			'post_parent'    => $study_id,
			'meta_key'       => '_sc_data_type',
			'posts_per_page' => 9999,
			'orderby'        => 'menu_order',
			'order'          => 'ASC',
		) );

		ob_start();
		while ( $elements->have_posts() ) : $elements->the_post(); ?>
			<?php if ( ! $sc_answer = sc_study_get_answer() ) continue; ?>

			<hr />
			<?php the_content(); ?>
			<p><em><?php echo $sc_answer->comment_content; ?></em></p>
		<?php
		endwhile;

		return ob_get_clean();
	}

}