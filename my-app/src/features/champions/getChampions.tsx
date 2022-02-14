import {
	createSlice,
	PayloadAction,
} from "@reduxjs/toolkit";

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
		fetchChampionsRequest: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchChampionsSuccess: (
			state,
			action: PayloadAction<any[]>
		) => {
			state.champions = action.payload;
			state.loading = false;
			state.error = null;
		},
		fetchTotalPages: (
			state,
			action: PayloadAction<number>
		) => {
			state.totalPages = action.payload;
		},
		fetchChampionsFailure: (
			state,
			action: PayloadAction<string>
		) => {
			state.error = action.payload;
			state.loading = false;
		},
	},
});

export const {
	fetchChampionsRequest,
	fetchChampionsSuccess,
	fetchChampionsFailure,
	fetchTotalPages,
} = championsSlice.actions;
export default championsSlice.reducer;
