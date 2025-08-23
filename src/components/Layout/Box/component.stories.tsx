import { ContentDemoSmall } from "../../demo_data"
import { Panel } from "../Panel"
import { Box } from "./index"

const meta = {
	component: Box,
	title: "Prometheus/Layout/Box",
}
export default meta

export const Primary = () => {
	return (
		<Box>
			<ContentDemoSmall />
		</Box>
	)
}

export const Layered = () => {
	return (
		<Box>
			<Panel direction="vertical">
				<div>Box1</div>
				<Box>
					<Panel direction="vertical">
						<div>Box2</div>
						<Box>
							<Panel direction="vertical">
								<div>Box3</div>
							</Panel>
						</Box>
					</Panel>
				</Box>
			</Panel>
		</Box>
	)
}
