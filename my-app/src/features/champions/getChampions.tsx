import { createSlice } from "@reduxjs/toolkit";

const championsSlice = createSlice({
	name: "champions",
	initialState: {
		champions: [],
		loading: false,
		error: null,
	},
	reducers: {
		fetchChampionsRequest: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchChampionsSuccess: (state, action) => {
			state.champions = action.payload;
			state.loading = false;
			state.error = null;
		},
		fetchChampionsFailure: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

export const {
	fetchChampionsRequest,
	fetchChampionsSuccess,
	fetchChampionsFailure,
} = championsSlice.actions;
export default championsSlice.reducer;
