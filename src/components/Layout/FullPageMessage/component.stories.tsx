import { FullPageMessage } from ".";
import { Box } from "../Box";
import { ContentDemoSmall } from "../../demo_data";

const meta = {
	title: "Prometheus/Layout/FullPageMessage",
	component: FullPageMessage,
	parameters: {
		layout: "fullscreen",
	},
};
export default meta;

export const Primary = () => {
	return <FullPageMessage>
		<ContentDemoSmall />
	</FullPageMessage>;
}

export const Small = () => {
	return <FullPageMessage>
		<h1>Header</h1>
		<p>Paragraph</p>
	</FullPageMessage>;
}

export const Scrollable = () => {
	return <FullPageMessage>
		<Box>
			<ContentDemoSmall />
		</Box>
		<ContentDemoSmall />
	</FullPageMessage>;
}
