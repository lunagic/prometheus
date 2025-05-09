import { FullPageMessage } from ".";

const meta = {
	title: "Prometheus/FullPageMessage",
	component: FullPageMessage,
	parameters: {
		layout: "fullscreen",
	},
};
export default meta;

export const Primary = () => <FullPageMessage>Hello</FullPageMessage>;
