import TerserPlugin from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
	cache: true,
	input: './src/main.js',
	output: [
		{
			format: 'es',
			dir: 'public/module',
		},
		{
			format: 'system',
			dir: 'public/module'
		},
		/*{
			format: 'umd',
			file: './dist/bundle.min.js',
			plugins: [
				TerserPlugin.terser()
			]
		},*/
	],
	plugins: [
		resolve(),
		babel({ babelHelpers: 'bundled' })
	]
}
