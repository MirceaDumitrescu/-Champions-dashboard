import fetchSearch from "../../features/champions/api/fetchSearch";
import fetchApi from "../../features/champions/api/fetchApi";
import "./searchbox.scss";
import { debounce } from "lodash";

const SearchBox = (props: any) => {
	const handleSearch = (event: any) => {
		event.target.value.length > 1
			? fetchSearch(props.dispatch, event.target.value)
			: fetchApi(props.dispatch, 1, 9);
	};
	const debouceSearch = debounce(handleSearch, 100);

	return (
		<>
			<input
				type="text"
				placeholder="Search for a champion"
				onChange={debouceSearch}
				className="search-box"
			/>
		</>
	);
};

export default SearchBox;
