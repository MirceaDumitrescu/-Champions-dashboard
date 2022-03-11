import React from "react";
import HeaderNavBar from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
import "./watchlistPage.scss";
import ChampionModal from "../../components/championModal";
import Champion from "../../features/champions/types/champion";
import CheckSaved from "../../components/watchlist/checkStatus";
import ToastContainerComponent from "../../components/toasts/toastContainer";

const WatchListPage = () => {
	const dispatch = useDispatch();
	const champions = useSelector((state: any) => state.watchlist.champions);
	const [show, setShow] = React.useState(false);
	const handleCloseModal = () => setShow(false);
	const [champion, setChampion] = React.useState<any>();
	const modalOpen = (champion: Champion, championID: number) => {
		setChampion(champion);
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
						champions.map((champion: Champion) => {
							return (
								<div className="watchlist-item" key={champion.id}>
									<h2
										className="watchlist-item-name"
										onClick={() => modalOpen(champion, champion.id)}
									>
										{champion.name}
									</h2>
									<div className="champion-image">
										<img
											src={champion.image_url}
											alt={champion.name}
											onClick={() => modalOpen(champion, champion.id)}
										/>
										{CheckSaved(champion.id, champion, dispatch)}
									</div>
								</div>
							);
						})}
				</div>
				<ChampionModal
					show={show}
					champion={champion}
					onClose={handleCloseModal}
				/>

				<ToastContainerComponent />
			</div>
		</div>
	);
};

export default WatchListPage;
