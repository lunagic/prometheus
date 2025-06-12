import { FullPageMessage } from ".";
import { Box } from "../Box";
import { ContentDemoFull, ContentDemoSmall } from "../../demo_data";

const meta = {
	title: "Prometheus/Layout/FullPageMessage",
	component: FullPageMessage,
	parameters: {
		layout: "fullscreen",
	},
};
export default meta;

export const Small = () => {
	return <FullPageMessage>
		<ContentDemoSmall />
	</FullPageMessage>;
}

export const Scrollable = () => {
	return <FullPageMessage>
		<Box>
			<ContentDemoFull />
		</Box>
		<ContentDemoFull />
	</FullPageMessage>;
}
