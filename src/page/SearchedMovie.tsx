import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Movies } from "../../typings";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ReactComponent as PlayIcon } from "../assets/svg/play.svg";
import { SeachedContent } from "../context/searchContext";
import SearchInput from "../components/SearchInput";

type Props = {
	search: Movies[];
};

const SearchedMovie = () => {
	// Search comes from the CONTEXT state management
	const { search } = useContext(SeachedContent) as Props;
	const navigate = useNavigate();

	const handleMovieClick = (data: Movies) => {
		navigate("/movie/" + data.id);
	};

	return (
		<>
			<div className="searchPage">
				<SearchInput />
				{search.length < 1 && <p style={P}>Enter a Search Term</p>}
				<div className="searchedMovies">
					{search?.map((movie) => (
						<div
							key={movie.id}
							className="searchedMovie"
							onClick={() => handleMovieClick(movie)}>
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
								{movie.original_title || movie.original_name} <br></br>{" "}
								<span>{movie.release_date}</span>
							</p>
							<p>{movie.id}</p>
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
	paddingLeft: "8px",
	color: "red",
} as React.CSSProperties;
