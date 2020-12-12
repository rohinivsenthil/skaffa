import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import preprocess from 'svelte-preprocess';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

export default ["es", "umd"].map((format) => {
	const UMD = format === "umd";

	return {
		input: 'src',
		output: {
//			sourcemap: true,
			format,
			file: UMD ? pkg.main : pkg.module,
			name: UMD ? "satin" : undefined,
		},
		plugins: [
			svelte({
				emitCss: false,
				preprocess: preprocess(),
				compilerOptions: {
					// enable run-time checks when not in production
					dev: !production
				}
			}),
			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration -
			// consult the documentation for details:
			// https://github.com/rollup/plugins/tree/master/packages/commonjs
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),

			// If we're building for production (npm run build
			// instead of npm run dev), minify
			production && terser()
		],
		watch: {
			clearScreen: false
		}
	}
});
