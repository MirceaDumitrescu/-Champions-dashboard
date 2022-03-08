import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import fetchApi from "../../features/champions/api/fetchApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
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
import Champion from "../../features/champions/types/champion";
import ToastContainerComponent from "../../components/toasts/toastContainer";

const PaginatedItems = (props: any) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { page } = useParams();
	const [show, setShow] = React.useState(false);
	const [champion, setChampion] = React.useState<any>();
	const reduxState = useSelector((state: any) => state.champions);
	const watchlistState = useSelector((state: any) => state.watchlist);
	const { loading, error, champions, totalPages } = reduxState;

	const handleCloseModal = () => {
		setShow(false);
		navigate(`/${page}`);
	};

	const handlePageClick = (data: any) => {
		fetchApi(dispatch, data.selected + 1, props.itemsPerPage);
		navigate(`/${data.selected + 1}`);
	};

	const modalOpen = (champion: Champion, championID: number) => {
		setChampion(champion);
		setShow(true);
		navigate(`/${page}/${championID}`);
	};

	const checkUrl = () => {
		if (id) {
			setShow(true);
			setChampion(
				champions.find((champion: any) => champion.id === Number(id))
			);
		}
	};

	const isSaved = (championID: number) => {
		return watchlistState.champions.findIndex(
			(champion: any) => champion.id === championID
		);
	};

	useEffect(() => {
		fetchApi(dispatch, Number(page), props.itemsPerPage);
	}, [id || page]);

	useEffect(() => {
		checkUrl();
	}, [champions]);

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
									onClick={() => modalOpen(champion, champion.id)}
									className="champion-name"
								>
									{champion.name}
								</h4>
								<div className="champion-image">
									<img
										src={champion.image_url}
										alt={champion.name}
										onClick={() => modalOpen(champion, champion.id)}
									/>
									{CheckSaved(isSaved(champion.id), champion, dispatch)}
								</div>
							</div>
						);
					})}

				<ToastContainerComponent />
				<ChampionModal
					show={show}
					champion={champion}
					onClose={handleCloseModal}
				/>
			</div>
		</div>
	);
};

export default PaginatedItems;
