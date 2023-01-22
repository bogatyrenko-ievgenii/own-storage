import { HeaderProps } from "./Header.props";
import { Container } from "../Container/Container";
import { Button, Logging } from "../../components";
import { Navigation } from "../../components";
import Logo from "./Logo.svg";
import cn from "classnames";
import { useContext, useState } from "react";
import styles from "./Header.module.css";
import { LoggingContext } from "../../context/Logging.context";
import uniqid from "uniqid";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [user, setUser] = useState<boolean>(false);
	const { opened, setOpened, logTypeSwitcher, onSetHasAccount } = useContext(LoggingContext);

	const onSetOpened = () => {
		if (opened || !setOpened) {
			onSetHasAccount && onSetHasAccount();
			return;
		}
		setOpened();
	};

	return (
		<header className={cn(className, styles.header)} {...props}>
			<Container className={styles.container}>
				<Logo />
				<Navigation
					items={[
						{ id: uniqid(), name: "in stock" },
						{ id: uniqid(), name: "sold" },
						{ id: uniqid(), name: "on way" },
					]}
					className={styles.navigation}
				/>
				{!user ? (
					<>
						<Button
							className={styles.logging}
							appearance="transparent"
							color="light"
							onClick={onSetOpened}
						>
							{logTypeSwitcher}
						</Button>
						{opened && <Logging />}
					</>
				) : (
					<div className={styles.logging}>lol</div>
				)}
			</Container>
		</header>
	);
};
