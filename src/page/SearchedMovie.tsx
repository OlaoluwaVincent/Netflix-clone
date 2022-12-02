import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movies } from "../../typings";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ReactComponent as PlayIcon } from "../assets/svg/play.svg";
import { SeachedContent } from "../context/searchContext";
import SearchInput from "../components/SearchInput";

type Props = {
	searchContext: Movies[];
};

const SearchedMovie = () => {
	const [filtered, setFiltered] = useState<Movies[]>([]);
	// Search comes from the CONTEXT state management
	const { searchContext } = useContext(SeachedContent) as Props;
	const navigate = useNavigate();

	// Navigate to the Movie Page
	const handleMovieClick = (data: Movies) => {
		navigate("/movie/" + data.id);
	};

	//Category filters
	const tv = searchContext.filter((movies) => {
		if (movies.media_type === "tv") {
			return movies;
		}
	});
	const movie = searchContext.filter((movies) => {
		if (movies.media_type === "movie") {
			return movies;
		}
	});

	return (
		<>
			<div className="searchPage">
				<SearchInput />
				{searchContext.length < 1 ? (
					<p style={instruction}>Enter a Search Term</p>
				) : (
					<div className="searchMovies__categories">
						<p onClick={() => setFiltered(searchContext)}>
							All <span>{searchContext.length}</span>
						</p>
						<p
							style={active}
							onClick={() => setFiltered(movie)}>
							Movie <span>{movie.length}</span>
						</p>

						<p onClick={() => setFiltered(tv)}>
							Series <span>{tv.length}</span>
						</p>
					</div>
				)}
				<div className="searchedMovies">
					{searchContext.map((movie) => (
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

const instruction = {
	paddingLeft: "8px",
	color: "red",
} as React.CSSProperties;

const active = {
	padding: "5px 8px",
	background: "#db1619",
	color: "#ffffff",
} as React.CSSProperties;
