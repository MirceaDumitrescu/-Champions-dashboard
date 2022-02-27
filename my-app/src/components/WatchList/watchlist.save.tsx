import { dispatchLocalWatchlist } from "../../features/watchlistReducer/watchlistState";
import Champion from "../../features/champions/types/champion";
import notifySucces from "../Toast/succes.toast";
import notifyError from "../Toast/error.toast";

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
			notifySucces();
		} else {
			//champion is not in local storage
			notifyError();
		}
	} else {
		//no local storage data
		notifyError();
	}
};

export default deleteLocalChampion;
