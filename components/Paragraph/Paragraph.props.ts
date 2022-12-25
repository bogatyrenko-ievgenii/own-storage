import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface ParagraphProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: string;
	size: "small" | "middle" | "large";
}
