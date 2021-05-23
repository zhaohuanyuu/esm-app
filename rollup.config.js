import JsonPlugin from '@rollup/plugin-json';
import TerserPlugin from 'rollup-plugin-terser';
import rollupPluginMyExample from "./src/plugin/rollup-plugin-my-example";
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
	// cache: true,
	/*input: './src/index.js',
	output: [
		{
			format: 'umd',
			strict: true,
			name: 'myBundle',
			file: 'bundle.js',
		},
		{
			format: 'umd',
			name: 'myBundle',
			file: 'bundle.min.js',
			plugins: [
				TerserPlugin.terser()
			]
		},
	],*/
	input: './src/keen-slider.js',
	output: [
		{
			format: 'umd',
			strict: true,
			name: 'keenSlider',
			file: './dist/keen-slider.js',
			sourcemap: true
		}
	],
	plugins: [
		resolve(),
		babel({ babelHelpers: 'bundled' })
	]
	/*input: [
		'./src/index.js',
		'./src/index2.js',
	],
	output: {
		dir: './dist',
		format: 'cjs',
		// file: 'build.js',
	},*/
	/*input: 'virtual-module',
	output: [{
		file: './dist/bundle.js',
		format: 'es'
	}],*/
	/*plugins: [
		JsonPlugin(),
		rollupPluginMyExample()
	]*/
}
