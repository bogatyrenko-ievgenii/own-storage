import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

interface item {
	id: number;
	name: string;
}

export interface NavigationProps
	extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	active?: number;
	items: item[];
}
