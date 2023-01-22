import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { LoggingContext } from "../../context/Logging.context";
import { Heading } from "../Heading/Heading";
import { Input } from "../Input/Input";
import styles from "./Logging.module.css";
import { LoggingProps } from "./Logging.props";

interface IInputs {
	name: string;
	email: string;
	password: string;
}

const defaultInputs = { name: "", email: "", password: "" };

export const Logging = ({ className, ...props }: LoggingProps): JSX.Element => {
	const { setOpened, logTypeCurrent } = useContext(LoggingContext);
	const [inputs, setInputs] = useState<IInputs>(defaultInputs);

	const writeToState = (event: ChangeEvent<HTMLInputElement>) => {
		setInputs((prevState) => {
			return {
				...prevState,
				[event?.target?.name]: event?.target?.value,
			};
		});
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<>
			<div className={styles.bg} onClick={setOpened} {...props}></div>
			<div className={styles.window}>
				<Heading className={styles.title} tag="h3">
					{`Please, type your data to ${logTypeCurrent.toLocaleLowerCase()}.`}
				</Heading>

				<form onSubmit={handleSubmit}>
					{Object.keys(inputs).map((inputTitle) => {
						return (
							<Input
								key={inputTitle}
								name={inputTitle}
								value={inputs[inputTitle as keyof typeof defaultInputs]}
								onChange={(event) => writeToState(event)}
								className={styles.input}
								border={true}
								placeholder={inputTitle}
							/>
						);
					})}
				</form>
			</div>
			<div className={styles.close} onClick={setOpened}></div>
		</>
	);
};
