import { LazyLoadImage } from "react-lazy-load-image-component";
import { Movies } from "../../typings";
import { ReactComponent as Logo } from "../assets/svg/logoN.svg";

type Props = {
	movie: Movies;
};

const MovieContainer = ({ movie }: Props) => {

	const handleMovieClick = ()=>{
		// What happens when a movie card is clicked?
		// It opens a MODAL...
	}

	return (
		<div className="movie" onClick={handleMovieClick}>
			<Logo
				className="movieContainerLogo"
				stroke="none"
			/>
			<LazyLoadImage
				src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
				alt={movie.original_title}
				className="movie__img"
			/>
			<div className="movieBottom">
				<div className="movie__title__rating">
					<p className="movie__title">{movie.original_title}</p>
					<span className="rating">{movie.vote_average.toFixed(1)}</span>
				</div>
			</div>
		</div>
	);
};

export default MovieContainer;
