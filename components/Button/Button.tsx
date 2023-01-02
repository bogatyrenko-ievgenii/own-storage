import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button = ({
	appearance,
	color,
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(className, {
				[styles.colorful]: appearance === "colorful",
				[styles.transparent]: appearance === "transparent",
				[styles.red]: color === "red" && appearance === "colorful",
				[styles.ghost]: color === "ghost" && appearance === "colorful",
				[styles.light]: color === "light" && appearance === "colorful",
				[styles.transred]: color === "red" && appearance === "transparent",
				[styles.transghost]: color === "ghost" && appearance === "transparent",
				[styles.translight]: color === "light" && appearance === "transparent",
			})}
			{...props}
		>
			{children}
		</button>
	);
};
