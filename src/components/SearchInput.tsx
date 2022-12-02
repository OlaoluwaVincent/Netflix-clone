import { useState, useContext } from "react";
import { ReactComponent as SearchIcon } from "../assets/svg/search.svg";
import { searchForMovies } from "../../utils/dataFetching";
import { SeachedContent } from "../context/searchContext";
import { Movies } from "../../typings";

type Props = {
	searchContext: Movies[];
	setSearchContext: React.Dispatch<React.SetStateAction<Movies[]>>;
};

const SearchInput = () => {
	const [text, setText] = useState<string>("");

	const { setSearchContext } = useContext(SeachedContent) as Props;


	// Handle the Search Request
	const handleSearch = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		if (text.length >= 2) {
			// if the input text is atleast 2 characters
			const res = await searchForMovies(text);

			if (res) {
				const sorted = res.sort((date1, date2) =>
					date1.release_date?.split("-") < date2.release_date?.split("-")
						? 1
						: date1.release_date?.split("-") > date2.release_date?.split("-")
						? -1
						: 0
				);
				setSearchContext(sorted);
			}
		} else if (text.length < 2) {
			// If the input text is less than 2 characters
			setSearchContext([]);
		}
	};

	return (
		<form
			className="searchContainer"
			onSubmit={handleSearch}>
			<input
				type="text"
				placeholder="Search for a show, movie or series"
				value={text}
				onChange={(e) => setText(e.target.value)}
				className="search__input"
			/>
			<span onClick={handleSearch}>
				<SearchIcon className="searchIcon" />
			</span>
		</form>
	);
};

export default SearchInput;