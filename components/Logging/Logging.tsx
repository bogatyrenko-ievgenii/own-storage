import { useContext } from "react";
import { LoggingContext } from "../../context/Logging.context";
import { Input } from "../Input/Input";
import styles from "./Logging.module.css";
import { LoggingProps } from "./Logging.props";

export const Logging = ({ className, ...props }: LoggingProps): JSX.Element => {
	const { opened, setOpened } = useContext(LoggingContext);

	return (
		<>
			<div className={styles.bg} onClick={setOpened} {...props}></div>
			<div className={styles.window}>
				<Input className={styles.input} border={true} placeholder="name" />
				<Input className={styles.input} border={true} placeholder="email" />
				<Input className={styles.input} border={true} placeholder="password" />
			</div>
			<div className={styles.close} onClick={setOpened}></div>
		</>
	);
};
