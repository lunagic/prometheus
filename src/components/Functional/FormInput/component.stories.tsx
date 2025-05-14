import { FormInput } from "./index";

const meta = {
	title: "Prometheus/Functional/FormInput",
	component: FormInput,
};
export default meta;

export const Primary = () => (
	<FormInput type="text" value="value" setValue={() => { }}>
		Label
	</FormInput>
);
