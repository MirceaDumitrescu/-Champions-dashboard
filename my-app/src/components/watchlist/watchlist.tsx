import React from "react";

const WatchList = () => {
	const [watchList, setWatchList] = React.useState([]);

	//read from local storage
	React.useEffect(() => {
		const localStorageData =
			localStorage.getItem("watchList");
		if (localStorageData) {
			setWatchList(JSON.parse(localStorageData));
		}
	}, []);

	return (
		<>
			<i className="fas fa-eye"></i>
			<p>{watchList.length}</p>
		</>
	);
};

export default WatchList;
