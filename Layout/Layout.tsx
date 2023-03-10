import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.prop";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { Container } from "./Container/Container";
import styles from "./Layout.module.css";
import { ILoggingContext, LoggingContextProvider } from "../context/Logging.context";

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.layout}>
			<Header className={styles.header} />
			<Container className={styles.body}>
				{/* <Sidebar className={styles.sidebar} /> */}
				<main className={styles.main}>{children}</main>
			</Container>
			<Footer className={styles.footer}>
				<Container />
			</Footer>
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & ILoggingContext>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		const { opened, logTypeSwitcher, logTypeCurrent, hasAccount } = props;

		return (
			<LoggingContextProvider
				opened={opened}
				logTypeSwitcher={logTypeSwitcher}
				logTypeCurrent={logTypeCurrent}
				hasAccount={hasAccount}
			>
				<Layout>
					<Component {...props} />
				</Layout>
			</LoggingContextProvider>
		);
	};
};
