import styles from "./styles.module.scss";

export interface ButtonProps {
	children: preact.ComponentChild;
	onClick: () => void;
}

export const Button = (props: ButtonProps) => {
	return (
		<button
			className={styles.main}
			type="button"
			onClick={(e) => {
				e.preventDefault();
				props.onClick();
			}}
		>
			{props.children}
		</button>
	);
};
