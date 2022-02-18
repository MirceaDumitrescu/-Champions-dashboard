import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/homepage";
import WatchListPage from "../pages/watchlistPage/watchlist_page";

const PublicRoutes = () => (
	<Routes>
		<Route path="/:page" element={<HomePage />} />
		<Route
			path="/watchlist"
			element={<WatchListPage />}
		/>
		<Route path="/" element={<HomePage />} />
	</Routes>
);

export default PublicRoutes;
