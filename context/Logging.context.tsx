import { createContext, ReactNode, useEffect, useState } from "react";

export interface ILoggingContext {
	opened: boolean;
	setOpened?: () => void;
}

export const LoggingContext = createContext<ILoggingContext>({ opened: false });

export const LoggingContextProvider = ({
	opened,
	children,
}: ILoggingContext & { children: ReactNode }): JSX.Element => {
	const [openedState, setOpenedState] = useState<boolean>(opened);

	useEffect(() => {
		let body = document.querySelector("body");

		if (openedState && body) {
			body.style.overflow = "hidden";
		} else if (body) {
			body.style.overflow = "";
		}
	}, [openedState]);

	const setOpened = () => {
		setOpenedState((openedState) => !openedState);
	};

	return (
		<LoggingContext.Provider value={{ opened: openedState, setOpened }}>
			{children}
		</LoggingContext.Provider>
	);
};
