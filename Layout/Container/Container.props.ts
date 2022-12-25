import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ContainerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
}
