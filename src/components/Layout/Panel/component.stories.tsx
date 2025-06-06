import { Button } from "../../Functional/Button";
import { Panel } from "./index";

const meta = {
	title: "Prometheus/Layout/Panel",
	component: Panel,
};
export default meta;

const testData = (
	<>
		<span>Word One</span>
		<span>Word Two</span>
		<span>Word Three</span>
	</>
);

export const Default = () => <Panel>{testData}</Panel>;

export const Horizontal = () => (
	<Panel direction="horizontal">{testData}</Panel>
);

export const Vertical = () => <Panel direction="vertical">{testData}</Panel>;

export const HorizontalNoGap = () => (
	<Panel direction="horizontal" gap={false}>
		{testData}
	</Panel>
);

export const VerticalNoGap = () => (
	<Panel direction="vertical" gap={false}>
		{testData}
	</Panel>
);

export const Centered = () => (
	<Panel direction="horizontal" centered={true}>
		{testData}
		<Button onClick={() => { }}>Test</Button>
	</Panel>
);
