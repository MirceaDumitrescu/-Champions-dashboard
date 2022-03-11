import { getRequest, getSuccess, getFailure } from "../getChampions";

const fetchSearch = (dispatch: any, searchTerm: string) => {
	dispatch(getRequest());
	const fetchChampions = async () => {
		console.log("🔥 Fetching champions based on search...");
		try {
			const response = await fetch(
				`https://api.pandascore.co/lol/champions?search[name]=${searchTerm}&token=eux4SlQq0iWLMKg5xZilceqXzmGTHCVMRyg3dikILwQVC1bZMCk`
			);
			const data = await response.json();
			dispatch(getSuccess(data));
		} catch (error: any) {
			dispatch(getFailure(error));
		}
	};
	fetchChampions();
};

export default fetchSearch;
