import styles from "./styles.module.scss";

export interface ButtonProps {
	children: preact.ComponentChild;
	onClick: () => void;
	disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
	return (
		<button
			className={`${styles.main} ${props.disabled ? styles.disabled : ""}`}
			type="button"
			onClick={(e) => {
				e.preventDefault();
				if (props.disabled) {
					return
				}
				props.onClick();
			}}
		>
			{props.children}
		</button>
	);
};
