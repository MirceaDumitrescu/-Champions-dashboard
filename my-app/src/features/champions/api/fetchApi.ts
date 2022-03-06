import {
	getRequest,
	getSuccess,
	getFailure,
	getTotalPages,
} from "../getChampions";

const fetchApi = (dispatch: any, number: number, size: number) => {
	dispatch(getRequest());
	const TOKEN = "6ucNBrRntWW-irML8DD6DlULRZSPTHff5eq2u2_IOK1fnFyqWAE";
	const fetchChampions = async () => {
		try {
			const response = await fetch(
				`https://api.pandascore.co/lol/champions?page[number]=${number}&page[size]=${size}&token=${TOKEN}`
			);
			const data = await response.json();
			const headers = response.headers;
			const totalPages: string | null = headers.get("X-Total");
			dispatch(getTotalPages(Number(totalPages)));
			dispatch(getSuccess(data));
		} catch (error: any) {
			dispatch(getFailure(error));
		}
	};
	fetchChampions();
};

export default fetchApi;
