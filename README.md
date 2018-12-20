# stramaxon-gutenberg-blocks
Creating simple Gutenberg Blocks to learn and do more on it.


## How to install

The code is basically a plugin. So put it in your WordPress site's plugin directory in a named folder. And since the source code is built using webpack and uses node modules you have to `npm install`

After `npm install` is done, run `npm run dev` - This will start webpack to watch for changes to the files, all you have to do is make changes to `blocks.js` and webpack will take care of the rest. 

## In production

When you are ready to publish your plugin (of course after changing the names and everything) you only have to push the built files i.e `block.build.js` and PHP code, and JS and CSS assets.
