import type { StorybookConfig } from "@storybook/preact-vite"

const config: StorybookConfig = {
	addons: ["@storybook/addon-essentials", "@chromatic-com/storybook"],
	framework: {
		name: "@storybook/preact-vite",
		options: {},
	},
	stories: ["../src/**/*.stories.tsx"],
}

export default config
