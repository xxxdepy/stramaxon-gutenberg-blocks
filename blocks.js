/**
 * BLOCK: Basic with ESNext
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 *
 * Using inline styles - no external stylesheet needed.  Not recommended!
 * because all of these styles will appear in `post_content`.
 */


/**
 * External dependencies
 */


import classnames from 'classnames';
import { omit, pick } from 'lodash';

/**
 * WordPress dependencies
 */
import { withState } from '@wordpress/compose';

const { __ } = wp.i18n; 

const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
	ColorPalette,
} = wp.editor;

const {
	PanelBody,
	Toolbar,
	PanelRow,
} = wp.components;

const { Component, Fragment } = wp.element;
const { registerBlockType } = wp.blocks;

/**
 * Register Alert Block.
 *
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType( 'stramaxon/the-simplest-block', {

	title: __( 'Simple Editable Block', 'Simple block' ), 
	icon: 'info', 
	description: __( 'Simple block.' ),
	category: 'common', 

	attributes: {
       content: {
           type: 'array',
           source: 'children',
           selector: '.block-text',
       },


       blockBackgroundColor: {
       	   type: 'string'
       },

	},



	edit ( props )  {
		const { 
			attributes: { content, blockBackgroundColor}, 
			setAttributes, 
			className, 
		} = props;

		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
			setAttributes( { newClassName: classnames(className) } );
		}


		function onChangeBackgroundColor( newBackground ) {
		    setAttributes( { blockBackgroundColor: newBackground } );
		}




		// classnames( className, "alert", {"alert-primary": !className.includes("is-style")} );

		const blockBackgroundColors = [
		   { color: '#333', name: 'dark' },
		   { color: '#fff', name: 'light' }
		];



		const blockInspectorControl = (
			<InspectorControls>
				<PanelBody>

					<PanelColorSettings
						title={ __( 'Background Color' ) }
						colorValue={ blockBackgroundColor }
						initialOpen={ false }
						colorSettings={ [ {
							value: ,
							onChange: blockBackgroundColor,
							colors: blockBackgroundColors, 
							label: __( 'Select background color' ),
						}] }
					>
					</PanelColorSettings>


				</PanelBody>
			</InspectorControls>
		);

	
		return (
                <div className={ classnames(className) } 
                     style={ 
                     	{ 
                     		backgroundColor: props.attributes.blockBackgroundColor,
                     	}
                }>

                            {blockInspectorControl}

			    			<RichText 
			    			    value={ content } 
			    			    onChange={ onChangeContent }
			    			    placeholder= {__('Enter some text here...')}
			    			    tagName="div"
			    			/>

	    		</div>
		);
	},



	save ( props ) {
		const { 
			setAttributes, 
			className, 
		} = props;
		// var newClassName = classnames( className, "alert" );

		return (
				<div  
				className={ classnames(className) }  
				style={ 
					{ 
                     	backgroundColor: props.attributes.blockBackgroundColor,
                    }
				}>
				        <div className="block-text">
				            <RichText.Content 
				                value={ props.attributes.content }
				             />
				        </div>

				         { props.attributes.alertDismissable && (<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">×</span> </button>)}
				</div>
		);
	},

});