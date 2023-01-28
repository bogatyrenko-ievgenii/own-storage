import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: "colorful" | "transparent";
	color: "red" | "ghost" | "light" | "green-dark";
	children: string;
	action?: () => void;
}
