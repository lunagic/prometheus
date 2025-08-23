import type { Preview } from "@storybook/preact"
import "../src/styles/index.scss"

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: "secondary",
			values: [
				{ name: "secondary", value: "var(--reset-css-background-secondary)" },
				{ name: "primary", value: "var(--reset-css-background-primary)" },
			],
		},
		layout: "centered",
	},
}

export default preview
