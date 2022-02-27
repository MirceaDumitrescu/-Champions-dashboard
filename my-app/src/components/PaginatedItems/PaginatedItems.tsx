import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import fetchApi from "../../features/champions/api/fetchApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import FetchButton from "../../components/Button/button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ChampionModal from "../PopupModal";

import "./PaginatedItems.scss";
import saveToLocalInstance from "../WatchList/watchlist.delete";

const PaginatedItems = (props: any) => {
	const navigate = useNavigate();
	const [show, setShow] = React.useState(false);

	const [modalChampion, setModalChampion] = React.useState(0);
	const path = window.location.pathname;
	const state = useSelector((state: any) => state);
	const dispatch = useDispatch();
	const { loading, error, champions, totalPages } = state.champions;

	const pageNumber = path.match(/\d+/g);
	const page = pageNumber ? pageNumber[0] : 1;

	const handleCloseModal = () => {
		setShow(false);
		navigate(`/${page}`);
	};

	const modalOpen = (el: any) => {
		setModalChampion(el);
		setShow(true);
		navigate(`/${page}/${el}`);
	};

	useEffect(() => {
		fetchApi(dispatch, Number(page), props.itemsPerPage);
		//check if link has id and page number
		const url = window.location.href;
		const urlId = url.match(/\d+/g);
		if (urlId && urlId?.length > 2) {
			setModalChampion(Number(urlId[2]));
			setShow(true);
		}
	}, []);

	const handlePageClick = (data: any) => {
		fetchApi(dispatch, data.selected + 1, props.itemsPerPage);
		navigate(`/${data.selected + 1}`);
	};

	return (
		<div className="paginatedItems-body">
			{/* <FetchButton
				callback={fetchApi}
				number={1}
				size={10}
				dispatch={dispatch}
				text={"Fetch Champions"}
			/> */}
			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={Number(Math.ceil(totalPages / props.itemsPerPage))}
				previousLabel="< previous"
				containerClassName="pagination"
			/>
			<div className="champions">
				{loading && <div>Loading...</div>}

				{error && <div>Error: {error}</div>}

				{champions &&
					champions.map((champion: any) => {
						return (
							<div key={champion.id}>
								<h2
									onClick={() => modalOpen(champion.id)}
									className="champion-name"
								>
									{champion.name}
								</h2>

								<img
									src={champion.image_url}
									alt={champion.name}
									onClick={() => modalOpen(champion.id)}
									className="champion-image"
								/>
								<p
									className="save-to-watchlist"
									onClick={() => saveToLocalInstance(champion, dispatch)}
								>
									Save to Watchlist
								</p>
							</div>
						);
					})}
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
				<ChampionModal
					show={show}
					champion={modalChampion}
					onClose={handleCloseModal}
				/>
			</div>
		</div>
	);
};

export default PaginatedItems;
