import { dispatchLocalWatchlist } from "../../features/watchlistReducer/watchlistState";
import Champion from "../../features/champions/types/champion";
import { notifySuccesSave } from "../toasts/successToasts";
import { notifyErrorDelete } from "../toasts/errorToasts";

const deleteChampionWatchlist = (championPushed: Champion, dispatch: any) => {
	//check if champion is already in local storage
	const localStorageData = localStorage.getItem("watchList");
	if (localStorageData) {
		const localStorageChampions = JSON.parse(localStorageData);
		const championIndex = localStorageChampions.findIndex(
			(champion: Champion) => champion.id === championPushed.id
		);
		if (championIndex === -1) {
			//champion is not in local storage
			localStorageChampions.push(championPushed);
			localStorage.setItem("watchList", JSON.stringify(localStorageChampions));
			dispatch(dispatchLocalWatchlist(localStorageChampions));
			notifySuccesSave();
		} else {
			//champion is already in local storage
			notifyErrorDelete();
		}
	} else {
		//no local storage data
		const localStorageChampions = [championPushed];
		localStorage.setItem("watchList", JSON.stringify(localStorageChampions));
		dispatch(dispatchLocalWatchlist(localStorageChampions));
		notifySuccesSave();
	}
};

export default deleteChampionWatchlist;
