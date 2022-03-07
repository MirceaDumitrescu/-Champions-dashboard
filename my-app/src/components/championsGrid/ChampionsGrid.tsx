import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import fetchApi from "../../features/champions/api/fetchApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ChampionModal from "../championModal";
import "./championsGrid.scss";
import CheckSaved from "../watchlist/checkStatus";
import { useParams } from "react-router-dom";
import {
	sortAscending,
	sortDescending,
} from "../../features/champions/getChampions";

const PaginatedItems = (props: any) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { page } = useParams();
	const [show, setShow] = React.useState(false);
	const [modalChampion, setModalChampion] = React.useState(0);
	const reduxState = useSelector((state: any) => state.champions);
	const { loading, error, champions, totalPages } = reduxState;

	const sortButtons = () => {
		return (
			<div className="sort-buttons">
				<button className="sort-button">
					<i
						className="fas fa-sort-amount-up"
						onClick={() => dispatch(sortAscending([...champions]))}
					></i>
				</button>
				<button className="sort-button">
					<i
						className="fas fa-sort-amount-down"
						onClick={() => dispatch(sortDescending([...champions]))}
					></i>
				</button>
			</div>
		);
	};

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
		const checkUrl = () => {
			if (id && page) {
				setModalChampion(Number(id));
				setShow(true);
			}
		};

		checkUrl();
	}, []);

	const handlePageClick = (data: any) => {
		fetchApi(dispatch, data.selected + 1, props.itemsPerPage);
		navigate(`/${data.selected + 1}`);
	};

	return (
		<div className="paginatedItems-body">
			{sortButtons()}
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
							<div key={champion.id} className="champion-container">
								<h4
									onClick={() => modalOpen(champion.id)}
									className="champion-name"
								>
									{champion.name}
								</h4>
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
