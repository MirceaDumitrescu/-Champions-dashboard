import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
	champions: any[];
	totalPages: number;
	loading: boolean;
	error: string | null;
}

const initialState: IState = {
	champions: [],
	totalPages: 0,
	loading: false,
	error: null,
};

const championsSlice = createSlice({
	name: "champions",
	initialState,
	reducers: {
		getRequest: (state) => {
			state.loading = true;
			state.error = null;
		},
		getSuccess: (state, action: PayloadAction<any[]>) => {
			state.champions = action.payload;
			state.loading = false;
			state.error = null;
		},
		getTotalPages: (state, action: PayloadAction<number>) => {
			state.totalPages = action.payload;
		},
		getFailure: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.loading = false;
		},
		sortAscending: (state) => {
			state.champions = [...state.champions].sort((a, b) =>
				a.name.localeCompare(b.name)
			);
		},
		sortDescending: (state) => {
			state.champions = [...state.champions].sort((a, b) =>
				b.name.localeCompare(a.name)
			);
		},
	},
});

export const {
	getRequest,
	getSuccess,
	getTotalPages,
	getFailure,
	sortAscending,
	sortDescending,
} = championsSlice.actions;
export default championsSlice.reducer;
