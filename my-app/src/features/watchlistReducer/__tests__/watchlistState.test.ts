import reducer, { dispatchLocalWatchlist } from "../watchlistState";

// should return initial state
describe("watchlistState reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			champions: [],
			totalChampions: 0,
		});
	});
});

// should handle dispatchLocalWatchlist
describe("dispatchLocalWatchlist", () => {
	it("should handle dispatchLocalWatchlist", () => {
		expect(reducer({}, dispatchLocalWatchlist([{}]))).toEqual({
			champions: [{}],
			totalChampions: 1,
		});
	});
});
