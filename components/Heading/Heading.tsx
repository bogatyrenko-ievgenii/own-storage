import { HeadingProps } from "./Heading.props";
import styles from "./Heading.module.css";
import cn from "classnames";

export const Heading = ({ tag, children, className }: HeadingProps): JSX.Element => {
	switch (tag) {
		case "h1":
			return <h1 className={cn(styles.heading1, className)}>{children}</h1>;
		case "h2":
			return <h2 className={cn(styles.heading2, className)}>{children}</h2>;
		case "h3":
			return <h3 className={cn(styles.heading3, className)}>{children}</h3>;
		default:
			return <></>;
	}
};
