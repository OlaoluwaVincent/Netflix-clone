import { useContext } from "react";
import { Movies } from "../../typings";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ReactComponent as PlayIcon } from "../assets/svg/play.svg";
import { SeachedContent } from "../context/searchContext";
import SearchInput from "./SearchInput";

type Props = {
	search: Movies[];
	setSearch: React.Dispatch<React.SetStateAction<Movies[]>>;
};

const SearchedMovie = () => {
	const { search } = useContext(SeachedContent) as Props;
	let movies: Movies[] = search;

	return (
		<>
			<div className="searchPage">
				<SearchInput />
				{search.length < 1 && <p style={P}>Enter a Search Term</p>}
				<div className="searchedMovies">
					{movies?.map((movie) => (
						<div
							key={movie.id}
							className="searchedMovie">
							<LazyLoadImage
								className="searchImage"
								src={
									movie.backdrop_path === null
										? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
										: `https://image.tmdb.org/t/p/original${movie.poster_path}`
								}
								alt={movie.original_title}
							/>
							<p className="searchTitle">
								{movie.title} <br></br> <span>{movie.release_date}</span>
							</p>
							<PlayIcon className="playIcon" />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default SearchedMovie;


const P = {
	paddingLeft:'8px',
	color:'red'
}as React.CSSProperties;