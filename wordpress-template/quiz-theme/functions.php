<?
add_action('wp_enqueue_scripts', 'quiz_theme_styles' );

function quiz_theme_styles() {
	if ( is_page_template( 'quiz.php' ) ) {
		wp_enqueue_style('reset-style', get_stylesheet_directory_uri() .'/css/reset.css');
	
		wp_enqueue_style('main-style', get_stylesheet_directory_uri() .'/css/main.css');
	
		wp_enqueue_style('head-block-style', get_stylesheet_directory_uri() .'/css/blocks/head-block.css');
		wp_enqueue_style('pluses-block-style', get_stylesheet_directory_uri() .'/css/blocks/pluses.css');
		wp_enqueue_style('questions-block-style', get_stylesheet_directory_uri() .'/css/blocks/questions.css');
	} else {
		wp_enqueue_style('parrent-style', get_template_directory_uri() .'/style.css');
	}
}

wp_enqueue_script('quiz-script', get_stylesheet_directory_uri(). '/js/quiz.js', array(), true);

add_filter('script_loader_tag', 'add_type_attribute', 10, 3);

function add_type_attribute($tag, $handle, $src) {
	if ( 'quiz-script' !== $handle ) {
			return $tag;
	}

	$tag = '<script type="module" src="' . esc_url( $src ) . '"></script>';
	return $tag;
}
