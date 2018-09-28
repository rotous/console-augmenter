const presets = [
	[
		"@babel/env",
		{
			targets: {
				edge: "12",
				firefox: "60",
				chrome: "67",
				safari: "11.1",
				ie: "11",
			},
			modules: false,
			useBuiltIns: "usage",
		},
	],
];

module.exports = {
	presets,
};
