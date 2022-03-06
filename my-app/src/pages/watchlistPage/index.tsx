import React from "react";
import HeaderNavBar from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import "./watchlist_page.scss";
import ChampionModal from "../../components/PopupModal";
import Champion from "../../features/champions/types/champion";
import { ToastContainer } from "react-toastify";
import CheckSaved from "../../components/WatchList/WatchListCheckStatus";

const WatchListPage = () => {
	const dispatch = useDispatch();
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
						champions.map((champion: Champion) => {
							return (
								<div className="watchlist-item" key={champion.id}>
									<h2
										className="watchlist-item-name"
										onClick={() => modalOpen(champion.id)}
									>
										{champion.name}
									</h2>
									<div className="champion-image">
										<img
											src={champion.image_url}
											alt={champion.name}
											onClick={() => modalOpen(champion.id)}
										/>
										{CheckSaved(champion.id, champion, dispatch)}
									</div>
								</div>
							);
						})}
				</div>
				<ChampionModal
					show={show}
					champion={modalChampion}
					onClose={handleCloseModal}
				/>
				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<ToastContainer />
			</div>
		</div>
	);
};

export default WatchListPage;
