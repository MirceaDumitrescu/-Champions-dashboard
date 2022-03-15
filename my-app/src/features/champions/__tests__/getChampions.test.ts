import reducer, {
	getRequest,
	getSuccess,
	getTotalPages,
	getFailure,
	sortAscending,
	sortDescending,
} from "../getChampions";

// should return the initial state
describe("getChampions reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			champions: [],
			loading: false,
			error: null,
			totalPages: 0,
		});
	});
});

// should handle getRequest
describe("getRequest", () => {
	it("should handle getRequest", () => {
		expect(reducer({}, getRequest())).toEqual({
			loading: true,
			error: null,
		});
	});
});

// should handle getSuccess
describe("getSuccess", () => {
	it("should handle getSuccess", () => {
		expect(reducer({}, getSuccess({ champions: [], totalPages: 0 }))).toEqual({
			champions: {
				champions: [],
				totalPages: 0,
			},
			loading: false,
			error: null,
		});
	});
});

// should handle getFailure
describe("getFailure", () => {
	it("should handle getFailure", () => {
		expect(reducer({}, getFailure("error"))).toEqual({
			loading: false,
			error: "error",
		});
	});
});

// should handle sortAscending
describe("sortAscending", () => {
	it("should handle sortAscending", () => {
		expect(
			reducer(
				{
					champions: [{ name: "C" }, { name: "A" }, { name: "B" }],
				},
				sortAscending()
			)
		).toEqual({
			champions: [{ name: "A" }, { name: "B" }, { name: "C" }],
		});
	});
});

// should handle sortDescending
describe("sortDescending", () => {
	it("should handle sortDescending", () => {
		expect(
			reducer(
				{
					champions: [{ name: "C" }, { name: "A" }, { name: "B" }],
				},
				sortDescending()
			)
		).toEqual({
			champions: [{ name: "C" }, { name: "B" }, { name: "A" }],
		});
	});
});

// should handle getTotalPages
describe("getTotalPages", () => {
	it("should handle getTotalPages", () => {
		expect(reducer({}, getTotalPages(0))).toEqual({
			totalPages: 0,
		});
	});
});
