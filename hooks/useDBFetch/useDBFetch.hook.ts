import { dbFetchProps } from "./useDBFetch.props";

export const useDBFetch = () => {
	return async function ({ urn, method, data }: dbFetchProps) {
		const res = await fetch(urn, {
			method: method,
			headers: {
				"Content-Type": "application/json",
			},
			body: data ? JSON.stringify(data) : null,
		});
		const response = await res.json();
		return response;
	};
};
