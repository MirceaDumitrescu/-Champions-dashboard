import { dispatchLocalWatchlist } from "../../features/watchlistReducer/watchlistState";
import { toast } from "react-toastify";

const saveToLocalInstance = (
	championPushed: any,
	dispatch: any
) => {
	const notify = () =>
		toast.success("Added to Watchlist", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	//check if champion is already in local storage
	const localStorageData =
		localStorage.getItem("watchList");
	if (localStorageData) {
		const localStorageChampions = JSON.parse(
			localStorageData
		);
		const championIndex =
			localStorageChampions.findIndex(
				(champion: any) =>
					champion.id === championPushed.id
			);
		if (championIndex === -1) {
			//champion is not in local storage
			localStorageChampions.push(championPushed);
			localStorage.setItem(
				"watchList",
				JSON.stringify(localStorageChampions)
			);
			dispatch(
				dispatchLocalWatchlist(
					localStorageChampions
				)
			);
			notify();
		} else {
			//champion is already in local storage
			toast.error("Already in Watchlist", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	} else {
		//no local storage data
		const localStorageChampions = [championPushed];
		localStorage.setItem(
			"watchList",
			JSON.stringify(localStorageChampions)
		);
		dispatch(
			dispatchLocalWatchlist(localStorageChampions)
		);
		notify();
	}
};

export default saveToLocalInstance;
