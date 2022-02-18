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

import "./PaginatedItems.scss";
import saveToLocalInstance from "../../components/WatchList/watchlist-save-local";

const PaginatedItems = (props: any) => {
	const navigate = useNavigate();
	const path = window.location.pathname;
	const state = useSelector((state: any) => state);
	const dispatch = useDispatch();
	const { loading, error, champions, totalPages } =
		state.champions;

	const pageNumber = path.match(/\d+/g);
	const page = pageNumber ? pageNumber[0] : 1;

	useEffect(() => {
		fetchApi(
			dispatch,
			Number(page),
			props.itemsPerPage
		);
	}, []);

	const handlePageClick = (data: any) => {
		fetchApi(
			dispatch,
			data.selected + 1,
			props.itemsPerPage
		);
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
				pageCount={Number(
					Math.ceil(
						totalPages / props.itemsPerPage
					)
				)}
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
								<h2>{champion.name}</h2>

								<img
									src={champion.image_url}
									alt={champion.name}
								/>
								<p
									className="save-to-watchlist"
									onClick={() =>
										saveToLocalInstance(
											champion,
											dispatch
										)
									}
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
			</div>
		</div>
	);
};

export default PaginatedItems;
