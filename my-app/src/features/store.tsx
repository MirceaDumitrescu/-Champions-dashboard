import { configureStore } from "@reduxjs/toolkit";
import championsReducer from "./champions/getChampions";

const store = configureStore({
	reducer: {
		champions: championsReducer,
	},
});

export default store;
