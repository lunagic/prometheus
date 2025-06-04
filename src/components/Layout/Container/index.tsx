import styles from "./styles.module.scss";

export interface ContainerProps {
    children: preact.ComponentChild;
    className?: string;
}

export const Container = (props: ContainerProps) => {
    let className = styles.main;
    if (props.className) {
        className += ` ${props.className}`;
    }

    return <div className={className}>
        <div className={styles.secondary}>
            {props.children}
        </div>
    </div>;
};
