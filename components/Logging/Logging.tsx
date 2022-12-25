import { LoggingProps } from "./Logging.props";
import cn from "classnames";
import styles from "./Logging.module.css";
import Link from "next/link";

export const Logging = ({ userName, className, ...props }: LoggingProps): JSX.Element => {
	if (!userName) {
		return (
			<Link href={"#"} legacyBehavior>
				<div className={cn(className, styles.border)}>
					<a
						tabIndex={0}
						className={cn(className, styles.link, styles.unlogged)}
						{...props}
					>
						Sign In
					</a>
				</div>
			</Link>
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
