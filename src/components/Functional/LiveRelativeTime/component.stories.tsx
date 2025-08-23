import { LiveRelativeTime } from "./index"

const meta = {
	component: LiveRelativeTime,
	title: "Prometheus/Functional/LiveRelativeTime",
}
export default meta

export const Seconds = () => (
	<LiveRelativeTime date={new Date(Date.now() - 50 * 1000)} />
)
