import { createContext, ReactNode, useEffect, useState } from "react";

type loggingType = "Sign in" | "Sign up";

export interface ILogged {
	name: string;
	email: string;
	password: string;
}

export type loggedType = null | ILogged;

export interface ILoggingContext {
	opened: boolean;
	setOpened?: () => void;
	logTypeSwitcher: loggingType;
	logTypeCurrent: loggingType;
	hasAccount: boolean;
	onSetHasAccount?: () => void;
	logged: loggedType;
	handleLogged?: (data: loggedType) => void;
}

export const LoggingContext = createContext<ILoggingContext>({
	opened: false,
	logTypeSwitcher: "Sign in",
	logTypeCurrent: "Sign up",
	hasAccount: true,
	logged: null,
});

export const LoggingContextProvider = ({
	opened = false,
	logTypeSwitcher,
	logTypeCurrent,
	hasAccount = true,
	children,
	logged = null,
}: ILoggingContext & { children: ReactNode }): JSX.Element => {
	const [openedState, setOpenedState] = useState<boolean>(opened);
	const [hasAccountState, setHasAccountState] = useState<boolean>(hasAccount);
	const [logTypeSwitcherState, setLogTypeSwitcherState] = useState<loggingType>(logTypeSwitcher);
	const [logTypeCurrentState, setLogTypeCurrentState] = useState<loggingType>(logTypeCurrent);
	const [loggedState, setLoggedState] = useState<loggedType>(logged);

	useEffect(() => {
		let body = document.querySelector("body");

		if (openedState && body) {
			body.style.overflow = "hidden";
		} else if (!openedState && body) {
			body.style.overflow = "";
		}
	}, [openedState]);

	useEffect(() => {
		if (hasAccountState && openedState) {
			setLogTypeSwitcherState(() => "Sign up");
			setLogTypeCurrentState(() => "Sign in");
		} else if (!hasAccountState || !openedState) {
			setLogTypeSwitcherState(() => "Sign in");
			setLogTypeCurrentState(() => "Sign up");
		}
	}, [openedState, hasAccountState]);

	const setOpened = () => {
		if (openedState) {
			setHasAccountState(true);
		}
		setOpenedState((openedState) => !openedState);
	};

	const onSetHasAccount = () => {
		setHasAccountState((hasAccountState) => !hasAccountState);
	};

	const handleLogged = (user: loggedType = null) => {
		setLoggedState(user);
	};

	return (
		<LoggingContext.Provider
			value={{
				opened: openedState,
				setOpened,
				logTypeSwitcher: logTypeSwitcherState,
				logTypeCurrent: logTypeCurrentState,
				onSetHasAccount,
				hasAccount,
				logged: loggedState,
				handleLogged,
			}}
		>
			{children}
		</LoggingContext.Provider>
	);
};
