import {
	fetchChampionsRequest,
	fetchChampionsSuccess,
	fetchChampionsFailure,
} from "../getChampions";

const fetchSearch = (dispatch: any, searchTerm: string) => {
	dispatch(fetchChampionsRequest());
	const fetchChampions = async () => {
		try {
			const response = await fetch(
				`https://api.pandascore.co/lol/champions?search[name]=${searchTerm}&token=eux4SlQq0iWLMKg5xZilceqXzmGTHCVMRyg3dikILwQVC1bZMCk`
			);
			const data = await response.json();
			dispatch(fetchChampionsSuccess(data));
		} catch (error) {
			dispatch(fetchChampionsFailure(error));
		}
	};
	fetchChampions();
};

export default fetchSearch;
