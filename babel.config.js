module.exports = function configure(api) {
	api.cache.forever();

	return {
		targets: {
			node: "14"
		},

		presets: [
			[
				"@babel/preset-env",
				{
					bugfixes: true,
					useBuiltIns: "usage",
					corejs: require("./package-lock.json")
						.packages["node_modules/core-js"].version,
					forceAllTransforms: true
				}
			],
			[
				"@babel/typescript",
				{
					allExtensions: true,
					allowDeclareFields: true
				}
			]
		],

		plugins: [
			[
				"@babel/transform-runtime",
				{
					corejs: 3,
					version: require("./package.json")
						.dependencies["@babel/runtime-corejs3"]
				}
			]
		]
	};
};
