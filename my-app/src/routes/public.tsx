import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/homepage";

const PublicRoutes = () => (
	<Routes>
		<Route path="/:page" element={<HomePage />} />
		{/* <Route path="/watchlist" element={<Watchlist />} /> */}
		<Route path="/" element={<HomePage />} />
	</Routes>
);

export default PublicRoutes;
