import styles from "./styles.module.scss"

export interface ButtonProps {
	children: preact.ComponentChild
	onClick: () => void
	disabled?: boolean
}

export const Button = (props: ButtonProps) => {
	return (
		<button
			className={`${styles.main} ${props.disabled ? styles.disabled : ""}`}
			onClick={(e) => {
				e.preventDefault()
				if (props.disabled) {
					return
				}
				props.onClick()
			}}
			type="button"
		>
			{props.children}
		</button>
	)
}
