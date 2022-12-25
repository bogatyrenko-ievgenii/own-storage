import cn from "classnames";
import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";

export const Tag = ({ children, className, ...props }: TagProps): JSX.Element => {
	return (
		<span className={cn(styles.tag)} {...props}>
			{children}
		</span>
	);
};
