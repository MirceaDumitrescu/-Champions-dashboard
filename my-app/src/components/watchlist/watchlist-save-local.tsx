const saveToLocalInstance = (championId: any) => {
	console.log("saveToLocalInstance", championId);
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
					champion.id === championId
			);
		if (championIndex === -1) {
			//champion is not in local storage
			localStorageChampions.push({ id: championId });
			localStorage.setItem(
				"watchList",
				JSON.stringify(localStorageChampions)
			);
		}
	} else {
		//champion is not in local storage
		const localStorageChampions = [{ id: championId }];
		localStorage.setItem(
			"watchList",
			JSON.stringify(localStorageChampions)
		);
	}
};

export default saveToLocalInstance;
