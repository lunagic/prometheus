import styles from "./styles.module.scss";

export interface ContentProps {
	children: preact.ComponentChild;
}

export const Content = (props: ContentProps) => {
	return (
		<div className={styles.main}>
			{props.children}
		</div>
	);
};
