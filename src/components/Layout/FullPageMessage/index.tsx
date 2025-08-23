import { Panel } from "../Panel"
import styles from "./styles.module.scss"

export interface FullPageMessageProps {
	children: preact.ComponentChild
}

export const FullPageMessage = (props: FullPageMessageProps) => {
	return (
		<div className={styles.main}>
			<Panel className={styles.content} direction="vertical">
				{props.children}
			</Panel>
		</div>
	)
}
