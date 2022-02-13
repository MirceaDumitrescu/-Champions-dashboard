import React from "react";
import fetchSearch from "../../features/champions/api/fetchSearch";
import "./searchbox.scss";

const SearchBox = (props: any) => {
	const [searchTerm, setSearchTerm] = React.useState("");
	const handleSearch = (event: any) => {
		setSearchTerm((prevState) => {
			return event.target.value;
		});
		fetchSearch(props.dispatch, searchTerm);
	};

	return (
		<>
			<input
				type="text"
				placeholder="Search for a champion"
				onChange={handleSearch}
				className="search-box"
			/>
		</>
	);
};

export default SearchBox;
