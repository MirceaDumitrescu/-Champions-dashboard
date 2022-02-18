import React from "react";
import HeaderNavBar from "../../components/Header/header";
import { useSelector } from "react-redux";
import "./watchlist_page.scss";

const WatchListPage = () => {
	const champions = useSelector(
		(state: any) => state.watchlist.champions
	);

	return (
		<div className="watchlist-body">
			<HeaderNavBar />
			<div className="watchlist-container">
				<h2>WatchList Page</h2>
				<div className="watchlist-champions">
					{champions.length < 1 && (
						<h1>No champions in watchlist</h1>
					)}

					{champions.length > 0 &&
						champions.map((champion: any) => {
							return (
								<div
									className="watchlist-item"
									key={champion.id}
								>
									<h2 className="watchlist-item-name">
										{champion.name}
									</h2>
									<div className="watchlist-item-image">
										<img
											src={
												champion.image_url
											}
											alt="champion"
										/>
									</div>
									<p className="save-to-watchlist">
										Remove From
										Watchlist
									</p>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default WatchListPage;
