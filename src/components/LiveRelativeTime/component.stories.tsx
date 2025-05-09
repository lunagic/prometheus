import { LiveRelativeTime } from "./index";

const meta = {
	title: "Prometheus/LiveRelativeTime",
	component: LiveRelativeTime,
};
export default meta;

export const Seconds = () => (
	<LiveRelativeTime date={new Date(Date.now() - 50 * 1000)} />
);
