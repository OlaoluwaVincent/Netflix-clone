import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Movies } from "../../typings";
import Modal from "./Modal";
type Props = {
	movie: Movies;
};

const MovieContainer = ({ movie }: Props) => {
	const [isOpen, setIsOPen] = useState(false);
	
	// Close Modal
	const onClose = () => {
		setIsOPen(false);
	};
	const handleMovieClick = () => {
		// What happens when a movie card is clicked?
		// It opens a MODAL...
			setIsOPen(true);
	};

	return (
		<>
			<div
				className="movie"
				onClick={handleMovieClick}>

				<LazyLoadImage
					src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
					alt={movie.original_title}
					className="movie__img"
				/>
			</div>
			<Modal
				close={onClose}
				open={isOpen}
				id={movie.id}
			/>
		</>
	);
};

export default MovieContainer;
