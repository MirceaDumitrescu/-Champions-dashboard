import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import fetchApi from "../../features/champions/api/fetchApi";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import FetchButton from "../../components/Button/button";
import "./PaginatedItems.scss";
import saveToLocalInstance from "../../components/watchlist/watchlist-save-local";

const PaginatedItems = (props: any) => {
	const state = useSelector((state: any) => state);
	const dispatch = useDispatch();
	const [pageCount, setPageCount] = React.useState(0);

	useEffect(() => {
		fetchApi(dispatch, 1, props.itemsPerPage);
		setPageCount(10);
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
			<FetchButton
				callback={fetchApi}
				number={1}
				size={10}
				dispatch={dispatch}
				text={"Fetch Champions"}
			/>
			<div className="champions">
				{state.loading && <div>Loading...</div>}

				{state.error && (
					<div>Error: {state.error}</div>
				)}

				{state.champions.champions &&
					state.champions.champions.map(
						(champion: any) => {
							return (
								<div key={champion.id}>
									<h2>{champion.name}</h2>
									<p
										onClick={() =>
											saveToLocalInstance(
												champion.id
											)
										}
									>
										Save to Watchlist
									</p>
									<img
										src={
											champion.image_url
										}
										alt={champion.name}
									/>
								</div>
							);
						}
					)}
			</div>
			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< previous"
				containerClassName="pagination"
			/>
		</div>
	);
};

export default PaginatedItems;
