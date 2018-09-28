import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'dist/main.js',
	output: {
		file: 'dist/bundle.js',
		format: 'iife',
		sourcemap: true,
	},
	plugins: [
		resolve({
			// pass custom options to the resolve plugin
			customResolveOptions: {
				moduleDirectory: 'node_modules'
			}
		}),
		commonjs({
			include: 'node_modules/**',  // Default: undefined
		}),
	]
};