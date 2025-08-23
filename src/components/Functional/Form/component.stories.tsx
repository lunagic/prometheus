import { FormInput } from "../FormInput"
import { Form } from "./index"

const meta = {
	component: Form,
	title: "Prometheus/Functional/Form",
}
export default meta

export const Primary = () => (
	<Form onSubmit={() => {}} submitText="######">
		<FormInput setValue={() => {}} type="text" value="######">
			########
		</FormInput>
		<FormInput setValue={() => {}} type="text" value="#########">
			####
		</FormInput>
		<FormInput setValue={() => {}} type="password" value="#########">
			########
		</FormInput>
	</Form>
)
