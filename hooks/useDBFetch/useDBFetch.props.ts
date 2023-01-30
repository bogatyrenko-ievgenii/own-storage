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
