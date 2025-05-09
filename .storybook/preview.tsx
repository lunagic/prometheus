import type { Preview } from "@storybook/preact"
import "../src/styles/index.scss"

const preview: Preview = {
	parameters: {
		layout: "centered",
		backgrounds: {
			values: [
				{ name: "secondary", value: "var(--reset-css-background-secondary)" },
				{ name: "primary", value: "var(--reset-css-background-primary)" },
			],
			default: "secondary",
		},
	},
}

export default preview
