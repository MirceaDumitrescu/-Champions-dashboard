import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import fetchApi from "../../features/champions/api/fetchApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import FetchButton from "../../components/Button/button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./PaginatedItems.scss";
import saveToLocalInstance from "../../components/watchlist/watchlist-save-local";

const PaginatedItems = (props: any) => {
	const state = useSelector((state: any) => state);
	const dispatch = useDispatch();
	const { loading, error, champions, totalPages } =
		state.champions;

	useEffect(() => {
		fetchApi(dispatch, 1, props.itemsPerPage);
	}, []);

	const handlePageClick = (data: any) => {
		fetchApi(
			dispatch,
			data.selected + 1,
			props.itemsPerPage
		);
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
											champion.id,
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
