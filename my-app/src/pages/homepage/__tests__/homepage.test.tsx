import Homepage from "../";
import { Provider } from "react-redux";
import store from "../../../features/store";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

//check if the component renders
test("Homepage renders", () => {
	render(<Homepage />);
	//expect to find 9 champions on the page
	const championContainer = screen.getByText("Home");
	const inputField = screen.getByPlaceholderText("Search for a champion");
	expect(championContainer).toBeInTheDocument();
	expect(inputField).toBeInTheDocument();
});
