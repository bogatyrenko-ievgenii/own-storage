import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	children: string;
}
