import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { LoggingContext } from "../../context/Logging.context";
import { Heading } from "../Heading/Heading";
import { Input } from "../Input/Input";
import styles from "./Logging.module.css";
import { LoggingProps } from "./Logging.props";
import cn from "classnames";
import { Button } from "../Button/Button";
import { useDBFetch } from "../../hooks";

interface IInputs {
	name: string;
	email: string;
	password: string;
}

type animationType = "appearing" | "switching" | "none";

const defaultInputs = { name: "", email: "", password: "" };

export const Logging = ({ className, ...props }: LoggingProps): JSX.Element => {
	const { setOpened, logTypeCurrent } = useContext(LoggingContext);
	const [inputs, setInputs] = useState<IInputs>(defaultInputs);
	const [animation, setAnimation] = useState<animationType>("appearing");
	const fetchUser = useDBFetch();

	useEffect(() => {
		if (animation === "appearing") {
			const timerForAppearing = setTimeout(() => {
				setAnimation("none");
			}, 500);
			return () => clearTimeout(timerForAppearing);
		} else {
			setAnimation("switching");
			const timerForSwitching = setTimeout(() => {
				setAnimation("none");
			}, 500);
			return () => clearTimeout(timerForSwitching);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [logTypeCurrent]);

	useEffect(() => {
		const onEscDown = (event: KeyboardEvent) => {
			if (event.code !== "Escape") {
				return;
			}

			if (setOpened && event.code === "Escape") {
				setOpened();
			}
		};
		document.addEventListener("keydown", onEscDown);
		return () => document.removeEventListener("keydown", onEscDown);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const writeToState = (event: ChangeEvent<HTMLInputElement>) => {
		setInputs((prevState) => {
			return {
				...prevState,
				[event?.target?.name]: event?.target?.value,
			};
		});
	};

	const clearAllInputs = () => {
		setInputs(defaultInputs);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<>
			<div className={styles.bg} onClick={setOpened} {...props}></div>
			<div
				className={cn(styles.window, {
					[styles.appearing]: animation === "appearing",
					[styles.switching]: animation === "switching",
				})}
			>
				<Heading className={styles.title} tag="h3">
					Please, type your personal data to {logTypeCurrent.toLocaleLowerCase()}.
				</Heading>

				<form onSubmit={handleSubmit}>
					{Object.keys(inputs).map((inputTitle) => {
						return (
							<Input
								key={inputTitle}
								name={inputTitle}
								type={inputTitle === "password" ? "password" : "text"}
								value={inputs[inputTitle as keyof typeof defaultInputs]}
								onChange={(event) => writeToState(event)}
								className={styles.input}
								border={true}
								placeholder={inputTitle}
							/>
						);
					})}
					<div className={styles["btn-wrapper"]}>
						<Button appearance="colorful" color="red" onClick={clearAllInputs}>
							Clear
						</Button>
						<Button type="submit" appearance="colorful" color="green-dark">
							Submit
						</Button>
					</div>
				</form>
			</div>
			<div className={styles.close} onClick={setOpened}></div>
		</>
	);
};
