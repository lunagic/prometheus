"use client"
import { useRef } from "preact/hooks"
import { Box } from "../../Layout/Box"
import { Panel } from "../../Layout/Panel"
import { Button } from "../Button"

export interface FormProps {
	children?: preact.ComponentChildren
	onSubmit: (e: HTMLFormElement) => void
	submitText: string
}

export const Form = (props: FormProps) => {
	const form = useRef<HTMLFormElement | null>(null)

	return (
		<Box>
			<form
				onSubmit={(e) => {
					e.preventDefault()
				}}
				ref={form}
			>
				<Panel direction="vertical">
					{props.children}
					<Button
						onClick={() => {
							if (form.current) {
								props.onSubmit(form.current)
							}
						}}
					>
						{props.submitText}
					</Button>
				</Panel>
			</form>
		</Box>
	)
}
