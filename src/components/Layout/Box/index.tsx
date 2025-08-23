import styles from "./styles.module.scss"

export interface BoxProps {
	children: preact.ComponentChild
	className?: string
}

export const Box = (props: BoxProps) => {
	let className = styles.main
	if (props.className) {
		className += ` ${props.className}`
	}

	return <div className={className}>{props.children}</div>
}
