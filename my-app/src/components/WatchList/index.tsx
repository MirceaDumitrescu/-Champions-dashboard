import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchLocalWatchlist } from "../../features/watchlistReducer/watchlistState";
import "./watchlist.scss";
import { Link } from "react-router-dom";

const WatchList = () => {
	const dispatch = useDispatch();
	const watchlist = useSelector((state: any) => state.watchlist);
	const localStorageData = localStorage.getItem("watchList");
	React.useEffect(() => {
		if (localStorageData) {
			dispatch(dispatchLocalWatchlist(JSON.parse(localStorageData)));
		}
	}, [localStorageData]);
	return (
		<>
			{watchlist.champions ? (
				<div className="watchlist-icon">
					<Link to="/watchlist">
						<i className="fas fa-eye"></i>
						<p className="watchlist-icon__text">{watchlist.totalChampions}</p>
					</Link>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
};

export default WatchList;
