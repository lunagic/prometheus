import styles from "./styles.module.scss";

export interface FullPageMessageProps {
	children: preact.ComponentChild;
}

export const FullPageMessage = (props: FullPageMessageProps) => {
	return <div className={styles.main}>{props.children}</div>;
};
