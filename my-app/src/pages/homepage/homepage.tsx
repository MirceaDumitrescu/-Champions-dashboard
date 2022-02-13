import { useDispatch } from "react-redux";
import SearchBox from "../../components/searchBox/searchbox";
import PaginatedItems from "../../components/PaginatedItems/PaginatedItems";
import "./homepage.scss";
import React from "react";
import WatchList from "../../components/watchlist/watchlist";

const HomePage = () => {
	const dispatch = useDispatch();
	const [itemsPerPage, setItemsPerPage] =
		React.useState(10);

	return (
		<div className="homepage-body">
			<WatchList />
			<h1>Mircea's Champions List</h1>
			<SearchBox dispatch={dispatch} />
			<PaginatedItems itemsPerPage={itemsPerPage} />
		</div>
	);
};

export default HomePage;
