import { dispatchLocalWatchlist } from "../../features/watchlistReducer/watchlistState";
import Champion from "../../features/champions/types/champion";
import { notifySuccesDelete } from "../toasts/successToasts";
import { notifyErrorSave } from "../toasts/errorToasts";

const deleteLocalChampion = (championPushed: Champion, dispatch: any) => {
	//check if champion is already in local storage
	const localStorageData = localStorage.getItem("watchList");
	if (localStorageData) {
		const localStorageChampions = JSON.parse(localStorageData);
		const championIndex = localStorageChampions.findIndex(
			(champion: Champion) => champion.id === championPushed.id
		);
		if (championIndex !== -1) {
			//champion is in local storage
			localStorageChampions.splice(championIndex, 1);
			localStorage.setItem("watchList", JSON.stringify(localStorageChampions));
			dispatch(dispatchLocalWatchlist(localStorageChampions));
			notifySuccesDelete();
		} else {
			//champion is not in local storage
			notifyErrorSave();
		}
	} else {
		//no local storage data
		notifyErrorSave();
	}
};

export default deleteLocalChampion;
