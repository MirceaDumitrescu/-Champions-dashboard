import PaginatedItems from "../../components/PaginatedItems/PaginatedItems";
import "./homepage.scss";
import React from "react";
import HeaderNavBar from "../../components/Header";

const HomePage = () => {
	const [itemsPerPage, setItemsPerPage] = React.useState(9);

	return (
		<>
			<HeaderNavBar />
			<div className="homepage-body">
				<PaginatedItems itemsPerPage={itemsPerPage} />
			</div>
		</>
	);
};

export default HomePage;
