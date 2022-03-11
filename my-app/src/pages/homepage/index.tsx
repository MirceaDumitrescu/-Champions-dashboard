import ChampionsGrid from "../../components/championsGrid/ChampionsGrid";
import "./homepage.scss";
import React from "react";
import HeaderNavBar from "../../components/header";

const HomePage = () => {
	const [itemsPerPage, setItemsPerPage] = React.useState(9);

	return (
		<>
			<HeaderNavBar />
			<div className="homepage-body">
				<ChampionsGrid itemsPerPage={itemsPerPage} />
			</div>
		</>
	);
};

export default HomePage;
