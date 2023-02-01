import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { loggedType, LoggingContext, ILogged } from "../../context/Logging.context";
import { Heading } from "../Heading/Heading";
import { Input } from "../Input/Input";
import styles from "./Logging.module.css";
import { LoggingProps } from "./Logging.props";
import cn from "classnames";
import { Button } from "../Button/Button";
import { dbFetchProps, useDBFetch } from "../../hooks";

type animationType = "appearing" | "switching" | "none";
const defaultInputs = { name: "", email: "", password: "" };

export const Logging = ({ className, ...props }: LoggingProps): JSX.Element => {
	const { setOpened, logTypeCurrent, logged, handleLogged } = useContext(LoggingContext);
	const [inputs, setInputs] = useState<ILogged>(defaultInputs);
	const [animation, setAnimation] = useState<animationType>("appearing");
	const [message, setMessage] = useState<string>("");
	const fetchUser = useDBFetch();

	useEffect(() => {
		const timer = setTimeout(() => {
			setMessage("");
		}, 3000);
		return () => clearTimeout(timer);
	}, [message]);

	useEffect(() => {
		if (animation !== "appearing") {
			setAnimation("switching");
		}

		const timer = setTimeout(() => {
			setAnimation("none");
		}, 500);
		return () => clearTimeout(timer);

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

	const validateInputs = () => {
		const passwordTemplate = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm;
		const emailTemplate = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/gm;

		let validEmail = inputs.email.match(emailTemplate);
		let validPassword = inputs.password.match(passwordTemplate);

		return !!validEmail && !!validPassword;
	};

	const createSettingObj = (type: "read" | "create"): dbFetchProps => {
		return {
			urn: `/api/logging/${type}Customer`,
			method: "POST",
			data: inputs,
		};
	};

	const handleNewUser = (data: loggedType | "string") => {
		if (typeof data === "object" && handleLogged) {
			handleLogged(data);
		} else if (typeof data === "string") {
			setMessage(data);
		} else {
			console.log(data);
		}
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		let validated = validateInputs();
		if (!validated) {
			console.log("wrong");
		}
		if (validated) {
			if (logTypeCurrent === "Sign in") {
				await fetchUser(createSettingObj("read")).then((data) => console.log(data));
			} else if (logTypeCurrent === "Sign up") {
				await fetchUser(createSettingObj("create")).then((data) => handleNewUser(data));
			}
		}
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
					{message && message}
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
						<Button
							appearance="colorful"
							color="red"
							onClick={() => setInputs(defaultInputs)}
						>
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
