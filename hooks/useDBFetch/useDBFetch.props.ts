// interface item {
// 	title: string;
// 	link: string;
// 	descriptioin: string;
// 	date: string;
// 	wight: number;
// 	quantity: number;
// 	course: number;
// 	costPrice: number;
// 	sellPrice: number;
// }

// interface user {
// 	name: string;
// 	email: string;
// 	password: string;
// }

export type urnType = string;
export type methodType = "GET" | "POST" | "PUT" | "DELETE";
export interface IData {
	name: string;
	email: string;
	password: string;
}

export interface dbFetchProps {
	urn: urnType;
	method: methodType;
	data: IData;
}
