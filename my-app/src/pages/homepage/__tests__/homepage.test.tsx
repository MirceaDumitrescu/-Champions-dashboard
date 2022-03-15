import Homepage from "..";
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../features/store";

//test if the page renders correctly
describe("With React testing library", () => {
	it("renders without crashing", () => {
		const { getByText } = render(
			<Provider store={store}>
				<MemoryRouter>
					<Homepage />
				</MemoryRouter>
			</Provider>
		);

		expect(getByText("Home")).toBeInTheDocument();
	});
});
