import type { StorybookConfig } from "@storybook/nextjs-vite";
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const config: StorybookConfig = {
    stories: [
        "../src/components/**/*.stories.tsx",
        "../src/features/**/*.stories.tsx", 
        "../src/app/**/*.stories.tsx"
    ],

    addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@chromatic-com/storybook",
		"@storybook/addon-vitest",
	],

    framework: "@storybook/nextjs-vite",
    staticDirs: ["../public"],

    typescript: {
        reactDocgen: "react-docgen-typescript"
    },

    viteFinal: async (config) => {
        // Add Node.js polyfills for browser environment
        config.plugins = config.plugins || [];
        config.plugins.push(
            nodePolyfills({
                include: ['buffer', 'process', 'util'],
                globals: {
                    Buffer: true,
                    global: true,
                    process: true,
                },
            })
        );

        config.define = {
            ...config.define,
            global: 'globalThis',
            'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL || 'postgresql://mock:mock@localhost:5432/storybook'),
        };

        return config;
    }
};
export default config;

