"use client";
import { useRef } from "preact/hooks";
import { Box } from "../Box";
import { Button } from "../Button";
import { Panel } from "../Panel";

export interface FormProps {
	children?: preact.ComponentChildren;
	onSubmit: (e: HTMLFormElement) => void;
	submitText: string;
}

export const Form = (props: FormProps) => {
	const form = useRef<HTMLFormElement | null>(null);

	return (
		<Box>
			<form
				ref={form}
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<Panel direction="vertical">
					{props.children}
					<Button
						onClick={() => {
							if (form.current) {
								props.onSubmit(form.current);
							}
						}}
					>
						{props.submitText}
					</Button>
				</Panel>
			</form>
		</Box>
	);
};
