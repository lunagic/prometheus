import { ContentDemoFull, ContentDemoSmall } from "../../demo_data"
import { Box } from "../Box"
import { FullPageMessage } from "."

const meta = {
	component: FullPageMessage,
	parameters: {
		layout: "fullscreen",
	},
	title: "Prometheus/Layout/FullPageMessage",
}
export default meta

export const Small = () => {
	return (
		<FullPageMessage>
			<ContentDemoSmall />
		</FullPageMessage>
	)
}

export const Scrollable = () => {
	return (
		<FullPageMessage>
			<Box>
				<ContentDemoFull />
			</Box>
			<ContentDemoFull />
		</FullPageMessage>
	)
}
