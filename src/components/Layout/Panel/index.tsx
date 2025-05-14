import styles from "./styles.module.scss";

export interface PanelProps {
	children?: preact.ComponentChild;
	className: string;
	centered: boolean;
	direction: "horizontal" | "vertical";
	gap: boolean;
}

export const Panel = (props: PanelProps) => {
	let className = styles.main;
	if (props.className) {
		className += ` ${props.className}`;
	}

	if (props.direction === "horizontal") {
		className += ` ${styles.horizontal}`;
	} else if (props.direction === "vertical") {
		className += ` ${styles.vertical}`;
	}

	if (props.centered) {
		className += ` ${styles.centered}`;

	}

	if (props.gap) {
		className += ` ${styles.gap}`;
	}

	return <div className={className}>{props.children}</div>;
};

Panel.defaultProps = {
	className: "",
	centered: false,
	direction: "horizontal",
	gap: true,
} satisfies PanelProps;
