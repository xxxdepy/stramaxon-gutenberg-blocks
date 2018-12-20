<?php
/**
 * BLOCK: 
 *
 * Gutenberg Custom Block assets.
 *
 * @since   1.0.0
 * @package GB
 */



/*
Plugin Name: Stramaxon Gutenberg Blocks
Plugin URI: 
Description: A simple block tutorial by Deepak Kamat
*/


// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }



function stramaxon_register_block(){

	// Scripts.
	wp_enqueue_script(
		'stramaxon_block_editor_script',
		plugins_url( 'block.build.js', __FILE__ ), 
		array( 'wp-blocks', 'wp-i18n', 'wp-element' , 'wp-components' , 'wp-editor', 'wp-format-library' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.build.js' ) 
	);



	// Editor Styles.
	wp_enqueue_style(
		'stramaxon_blocks_editor_style', 
		plugins_url( 'assets/css/editor.css', __FILE__ ), 
		array( 'wp-edit-blocks' ), 
		filemtime( plugin_dir_path( __FILE__ ) . 'assets/css/editor.css' )
	);


	// Front end styles
	wp_enqueue_style(
		'stramaxon_blocks_frontend_style', 
		plugins_url( 'assets/css/style.css', __FILE__ ), 
		array( 'wp-blocks' ), 
		filemtime( plugin_dir_path( __FILE__ ) . 'assets/css/style.css' ) // filemtime — Gets file modification time.
	);

	register_block_type( 'missio/alert', array(
		    'editor_script' => 'stramaxon_block_editor_script',
		    'editor_style' => 'stramaxon_blocks_editor_style',
	        'style' => 'stramaxon_blocks_frontend_style',
	));
}







add_action('init', 'stramaxon_register_block');