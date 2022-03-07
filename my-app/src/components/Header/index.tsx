import React from "react";
import SearchBox from "../searchBox";
import WatchList from "../watchlist";
import { useDispatch } from "react-redux";
import "./header.scss";
import { Link } from "react-router-dom";

const HeaderNavBar = () => {
	const dispatch = useDispatch();
	return (
		<div className="header-navbar">
			<div className="header-navbar-left">
				<Link to="/">Home</Link>
			</div>
			<SearchBox dispatch={dispatch} />
			<WatchList />
		</div>
	);
};

export default HeaderNavBar;
