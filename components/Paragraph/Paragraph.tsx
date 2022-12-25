import { ParagraphProps } from "./Paragraph.props";
import cn from "classnames";
import styles from "./Paragraph.module.css";

export const Paragraph = ({ children, size, className, ...props }: ParagraphProps): JSX.Element => {
	return (
		<p
			className={cn(styles.paragraph, {
				[styles.small]: size === "small",
				[styles.middle]: size === "middle",
				[styles.large]: size === "large",
			})}
			{...props}
		>
			{children}
		</p>
	);
};
