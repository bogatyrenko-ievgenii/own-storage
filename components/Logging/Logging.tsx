import { LoggingProps } from "./Logging.props";
import cn from "classnames";
import styles from "./Logging.module.css";
import Link from "next/link";
import { dbFetchProps, useDBFetch } from "../../hooks";

export const Logging = ({ userName, className, ...props }: LoggingProps): JSX.Element => {
	const dbFetch = useDBFetch();
	const reqProps: dbFetchProps = {
		urn: "api/logging/readCustomer",
		method: "POST",
		data: { name: "BOSS", email: "BASS@MAIL.COM", password: "LOL123" },
	};

	const handleDbFetch = () => {
		dbFetch(reqProps).then((data) => console.log(data));
	};

	if (!userName) {
		return (
			<div className={cn(className, styles.border)}>
				<a tabIndex={0} className={cn(className, styles.link, styles.unlogged)} {...props}>
					Sign In
				</a>
			</div>
		);
	} else {
		return (
			<Link href={"#"} legacyBehavior>
				<a tabIndex={0} className={cn(className, styles.link, styles.logged)} {...props}>
					{userName}
				</a>
			</Link>
		);
	}
};
