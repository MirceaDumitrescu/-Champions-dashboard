import {
	fetchChampionsRequest,
	fetchChampionsSuccess,
	fetchChampionsFailure,
} from "../getChampions";

const fetchApi = (
	dispatch: any,
	number: number,
	size: number
) => {
	dispatch(fetchChampionsRequest());
	const TOKEN =
		"6ucNBrRntWW-irML8DD6DlULRZSPTHff5eq2u2_IOK1fnFyqWAE";
	const fetchChampions = async () => {
		try {
			const response = await fetch(
				`https://api.pandascore.co/lol/champions?page[number]=${number}&page[size]=${size}&token=${TOKEN}`
			);
			const data = await response.json();
			dispatch(fetchChampionsSuccess(data));
		} catch (error) {
			dispatch(fetchChampionsFailure(error));
		}
	};
	fetchChampions();
};

export default fetchApi;
