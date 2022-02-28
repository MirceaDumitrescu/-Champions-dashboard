import saveToLocalInstance from "./WatchlistDeleteChampion";
import Champion from "../../features/champions/types/champion";
import deleteLocalChampion from "./WatchListSaveChampion";

const checkId = (id: number) => {
	const localStorageData = localStorage.getItem("watchList");
	const localStorageChampions = localStorageData
		? JSON.parse(localStorageData)
		: [];
	return localStorageChampions.findIndex((champion: any) => champion.id === id);
};

const checkSaved = (id: number, champion: Champion, dispatch: any) => {
	if (checkId(id) === -1) {
		return (
			<i
				className="fa-brands fa-gratipay"
				id="unsaved"
				onClick={() => saveToLocalInstance(champion, dispatch)}
			></i>
		);
	} else {
		return (
			<i
				className="fa-brands fa-gratipay"
				id="saved"
				onClick={() => deleteLocalChampion(champion, dispatch)}
			></i>
		);
	}
};

export default checkSaved;
