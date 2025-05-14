import { ContentDemoSmall } from "../../demo_data";
import { Box } from "./index";

const meta = {
	title: "Prometheus/Layout/Box",
	component: Box,
};
export default meta;

export const Primary = () => {
	return <Box>
		<ContentDemoSmall />
	</Box>;
}
