import { Button } from "../../Functional/Button"
import { Container } from "./index"

const meta = {
	component: Container,
	parameters: {
		layout: "fullscreen",
	},
	title: "Prometheus/Layout/Container",
}
export default meta

export const Primary = () => {
	return (
		<Container>
			<Button onClick={() => {}}>Test</Button>
		</Container>
	)
}
