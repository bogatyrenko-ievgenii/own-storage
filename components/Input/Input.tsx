import cn from "classnames";
import styles from "./Input.module.css";
import { InputProps } from "./Input.props";

export const Input = ({ border = false, className, ...props }: InputProps): JSX.Element => {
	return (
		<input
			className={cn(styles.input, className, {
				[styles.border]: border,
			})}
			{...props}
		/>
	);
};
