import { FormInput } from "./index"

const meta = {
	component: FormInput,
	title: "Prometheus/Functional/FormInput",
}
export default meta

export const Primary = () => (
	<FormInput setValue={() => {}} type="text" value="value">
		Label
	</FormInput>
)
