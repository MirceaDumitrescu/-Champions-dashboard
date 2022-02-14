import { configureStore } from "@reduxjs/toolkit";
import championsReducer from "./champions/getChampions";
import watchlistReducer from "./watchlistReducer/watchlistState";

const store = configureStore({
	reducer: {
		champions: championsReducer,
		watchlist: watchlistReducer,
	},
});

export default store;
