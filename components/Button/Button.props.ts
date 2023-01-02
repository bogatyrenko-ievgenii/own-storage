import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: "colorful" | "transparent";
	color: "red" | "ghost" | "light";
	children: string;
	action?: () => void;
}
