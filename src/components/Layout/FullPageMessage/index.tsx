import { Panel } from "../Panel";
import styles from "./styles.module.scss";

export interface FullPageMessageProps {
	children: preact.ComponentChild;
}

export const FullPageMessage = (props: FullPageMessageProps) => {
	return <div className={styles.main}>
		<Panel direction="vertical" className={styles.content}>
			{props.children}
		</Panel>
	</div>;
};
