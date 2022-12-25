import { ContainerProps } from "./Container.props";
import styles from "./Container.module.css";
import cn from "classnames";

export const Container = ({ children, className, ...props }: ContainerProps): JSX.Element => {
	return (
		<div className={cn(className, styles.container)} {...props}>
			{children || "CONTAINER"}
		</div>
	);
};
