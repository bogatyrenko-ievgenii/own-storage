import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export interface LoggingProps
	extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	userName?: string;
}
