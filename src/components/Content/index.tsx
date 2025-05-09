import { Panel } from "../Panel";
import styles from "./styles.module.scss";

export interface ContentProps {
	children: preact.ComponentChild;
}

export const Content = (props: ContentProps) => {
	return (
		<Panel direction="vertical" className={styles.main}>
			{props.children}
		</Panel>
	);
};
