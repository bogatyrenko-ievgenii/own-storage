import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

interface item {
	id: string;
	name: string;
}

export interface NavigationProps
	extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	active?: number;
	items: item[];
}
