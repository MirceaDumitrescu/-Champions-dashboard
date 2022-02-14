import React from "react";
import SearchBox from "../searchBox/searchbox";
import WatchList from "../watchlist/watchlist";
import { useDispatch } from "react-redux";
import "./header.scss";

const HeaderNavBar = () => {
	const dispatch = useDispatch();
	return (
		<div className="header-navbar">
			<SearchBox dispatch={dispatch} />
			<WatchList />
		</div>
	);
};

export default HeaderNavBar;
