import {
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit";

interface IState {
	champions: any[];
	totalChampions: number;
}

const initialState: IState = {
	champions: [],
	totalChampions: 0,
};

const watchlistSlice = createSlice({
	name: "watchlist",
	initialState,
	reducers: {
		dispatchLocalWatchlist: (
			state,
			action: PayloadAction<any[]>
		) => {
			state.champions = action.payload;
			state.totalChampions = action.payload.length;
		},
	},
});

export const { dispatchLocalWatchlist } =
	watchlistSlice.actions;
export default watchlistSlice.reducer;
