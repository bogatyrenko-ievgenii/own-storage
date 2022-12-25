import { HeaderProps } from "./Header.props";
import { Container } from "../Container/Container";
import { Logging } from "../../components";
import { Navigation } from "../../components";
import Logo from "./Logo.svg";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	// const { asPath } = useRouter();

	// const getNavItems = () => {
	// 	switch (asPath) {
	// 		case "/":
	// 			return [
	// 				{ id: 739, name: "home" },
	// 				{ id: 732, name: "contacts" },
	// 			];
	// 		default:
	// 			return [
	// 				{ id: 123, name: "in stock" },
	// 				{ id: 456, name: "sold" },
	// 				{ id: 789, name: "on way" },
	// 			];
	// 	}
	// };

	return (
		<header className={cn(className, styles.header)} {...props}>
			<Container className={styles.container}>
				<Logo />
				<Navigation
					items={[
						{ id: 123, name: "in stock" },
						{ id: 456, name: "sold" },
						{ id: 789, name: "on way" },
					]}
					className={styles.navigation}
				/>
				<Logging className={styles.logging} />
			</Container>
		</header>
	);
};
