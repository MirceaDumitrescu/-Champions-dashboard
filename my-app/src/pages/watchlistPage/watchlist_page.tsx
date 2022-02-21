import React from "react";
import HeaderNavBar from "../../components/Header/header";
import { useSelector } from "react-redux";
import "./watchlist_page.scss";
import ChampionModal from "../../components/PopupModal/championModal";

const WatchListPage = () => {
	const champions = useSelector((state: any) => state.watchlist.champions);
	const [show, setShow] = React.useState(false);
	const handleCloseModal = () => setShow(false);
	const [modalChampion, setModalChampion] = React.useState(0);
	const modalOpen = (el: any) => {
		setModalChampion(el);
		setShow(true);
	};
	return (
		<div className="watchlist-body">
			<HeaderNavBar />
			<div className="watchlist-container">
				<h2>WatchList Page</h2>
				<div className="watchlist-champions">
					{champions.length < 1 && <h1>No champions in watchlist</h1>}

					{champions.length > 0 &&
						champions.map((champion: any) => {
							return (
								<div
									className="watchlist-item"
									key={champion.id}
								>
									<h2
										className="watchlist-item-name"
										onClick={() => modalOpen(champion.id)}
									>
										{champion.name}
									</h2>
									<div className="watchlist-item-image">
										<img
											src={champion.image_url}
											alt="champion"
											onClick={() =>
												modalOpen(champion.id)
											}
										/>
									</div>
									<p className="save-to-watchlist">
										Remove From Watchlist
									</p>
								</div>
							);
						})}
				</div>
				<ChampionModal
					show={show}
					champion={modalChampion}
					onClose={handleCloseModal}
				/>
			</div>
		</div>
	);
};

export default WatchListPage;
