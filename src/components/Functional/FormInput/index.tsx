import type { ChangeEvent } from "preact/compat";
import type { Dispatch, StateUpdater } from "preact/hooks";
import styles from "./styles.module.scss";

export interface FormInputProps {
	className?: string;
	children: preact.ComponentChildren;
	value: string;
	type: string;
	setValue: Dispatch<StateUpdater<string>>;
}

export const FormInput = (props: FormInputProps) => {
	let className = styles.main;
	if (props.className) {
		className += ` ${props.className}`;
	}

	return (
		<label className={className}>
			<div>{props.children}</div>

			<input
				value={props.value}
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					const target = e.target as HTMLInputElement;
					props.setValue(target.value);
				}}
				type={props.type}
			/>
		</label>
	);
};
