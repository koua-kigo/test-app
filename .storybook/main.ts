import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";

const config: StorybookConfig = {
    stories: ["../src/components/**/*.stories.tsx"],

    addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@chromatic-com/storybook",
		"@storybook/experimental-addon-test",
	],

    framework: "@storybook/experimental-nextjs-vite",
    staticDirs: ["../public"],

    docs: {
        autodocs: true
    },

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
};
export default config;
