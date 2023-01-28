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
				[styles["green-dark"]]: color === "green-dark" && appearance === "colorful",
				[styles["trans-red"]]: color === "red" && appearance === "transparent",
				[styles["trans-green-dark"]]:
					color === "green-dark" && appearance === "transparent",
				[styles["trans-ghost"]]: color === "ghost" && appearance === "transparent",
				[styles["trans-light"]]: color === "light" && appearance === "transparent",
			})}
			{...props}
		>
			{children}
		</button>
	);
};
