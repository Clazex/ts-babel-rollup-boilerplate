import { DEFAULT_EXTENSIONS as BABEL_DEFAULT_EXTENSIONS } from "@babel/core";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import eslint from "@rollup/plugin-eslint";
import resolve from "@rollup/plugin-node-resolve";
import sizes from "@atomico/rollup-plugin-sizes";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

const config = {
	input: [
		"src/index.ts"
	],

	output: [
		{
			file: "dist/index.js",
			format: "cjs",
			plugins: [
				terser()
			]
		},
		{
			file: "dist/index.esm.js",
			format: "es",
			plugins: [
				terser({
					module: true
				})
			]
		}
	],

	plugins: [
		commonjs(),
		resolve(),

		eslint({
			fix: true
		}),

		typescript(),
		babel({
			exclude: "node_modules/**",
			extensions: [
				...BABEL_DEFAULT_EXTENSIONS,
				".ts"
			],
			babelHelpers: "runtime"
		}),

		sizes(0)
	]
};

export default config;
