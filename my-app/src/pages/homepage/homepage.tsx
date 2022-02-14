import PaginatedItems from "../../components/PaginatedItems/PaginatedItems";
import "./homepage.scss";
import React from "react";
import HeaderNavBar from "../../components/header/header";

const HomePage = () => {
	const [itemsPerPage, setItemsPerPage] =
		React.useState(9);

	return (
		<div className="homepage-body">
			<HeaderNavBar />
			<PaginatedItems itemsPerPage={itemsPerPage} />
		</div>
	);
};

export default HomePage;
