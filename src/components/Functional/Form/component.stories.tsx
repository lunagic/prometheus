import { FormInput } from "../FormInput";
import { Form } from "./index";

const meta = {
	title: "Prometheus/Functional/Form",
	component: Form,
};
export default meta;

export const Primary = () => (
	<Form onSubmit={() => { }} submitText="######">
		<FormInput type="text" value="######" setValue={() => { }}>
			########
		</FormInput>
		<FormInput type="text" value="#########" setValue={() => { }}>
			####
		</FormInput>
		<FormInput type="password" value="#########" setValue={() => { }}>
			########
		</FormInput>
	</Form>
);
