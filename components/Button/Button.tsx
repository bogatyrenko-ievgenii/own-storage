import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button = ({ appearance, children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.red]: appearance === "main-red",
				[styles.dark]: appearance === "main-ghost",
			})}
			{...props}
		>
			{children}
		</button>
	);
};
