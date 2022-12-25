import cn from "classnames";
import styles from "./TextArea.module.css";
import { TextAreaProps } from "./TextArea.props";

export const TextArea = ({ className, ...props }: TextAreaProps): JSX.Element => {
	return <textarea className={cn(styles.textarea)} {...props} />;
};
