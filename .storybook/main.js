// Importing Node.js native modules with the node: protocol
const path = require("node:path");
const {
	loadConfigFromFile,
	ConfigLoaderSuccessResult,
} = require("@storybook/core-common");

module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"storybook-dark-mode",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	staticDirs: ["../public"],
	webpackFinal: async (config, { configType }) => {
		// Add polyfills and mocks for Node.js modules
		config.resolve.fallback = {
			...config.resolve.fallback,
			buffer: require.resolve("buffer/"),
			stream: require.resolve("stream-browserify"),
			util: require.resolve("util/"),
			crypto: require.resolve("crypto-browserify"),
		};

		// Replace server-side modules with mocks
		config.resolve.alias = {
			...config.resolve.alias,
			"@/db/models/users/users": path.resolve(__dirname, "./mocks/db.js"),
			"drizzle-orm/postgres-js": path.resolve(__dirname, "./mocks/db.js"),
		};

		// Return the modified config
		return config;
	},
};
