import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/svg/search.svg";
import { searchForMovies } from "../../utils/dataFetching";
import { Movies } from "../../typings";
type Props = {
	setResult: React.Dispatch<React.SetStateAction<Movies[] | undefined>>;
};

const SearchInput = ({ setResult }: Props) => {
	const [text, setText] = useState<string>("");

	const handleSearch = async () => {
		if (text.length >=2) {
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

				setResult(sorted);
			}
		}else if(text.length < 2){
            // If the input text is less than 2 characters
            setResult([])
        }
	};
	return (
		<div className="searchContainer">
			<input
				type="text"
                placeholder="Search for a show, movie"
				value={text}
				onChange={(e)=>setText(e.target.value)}
			/>
            <span onClick={handleSearch}>
			<SearchIcon className="searchIcon" />
            </span>
		</div>
	);
};

export default SearchInput;
