import { HeadingProps } from "./Heading.props";
import styles from "./Heading.module.css";

export const Heading = ({ tag, children }: HeadingProps): JSX.Element => {
	switch (tag) {
		case "h1":
			return <h1 className={styles.heading1}>{children}</h1>;
		case "h2":
			return <h2 className={styles.heading2}>{children}</h2>;
		case "h3":
			return <h3 className={styles.heading3}>{children}</h3>;
		default:
			return <></>;
	}
};
