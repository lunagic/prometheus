import type { StorybookConfig } from "@storybook/preact-vite"

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.tsx"],
	addons: ["@storybook/addon-essentials", "@chromatic-com/storybook"],
	framework: {
		name: "@storybook/preact-vite",
		options: {},
	},
}

export default config
