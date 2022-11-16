import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Movies } from "../../typings";
import Modal from "./Modal";
type Props = {
	movie: Movies;
};

const MovieContainer = ({ movie }: Props) => {
	const [isOpen, setIsOPen] = useState(false);
	const [singleId, setSingleId] = useState<number>()
	const onClose = () => {
		setIsOPen(false);
	};
	const handleMovieClick =async (id:number) => {
		// What happens when a movie card is clicked?
		// It opens a MODAL...
			setIsOPen(true);
			if(typeof id === "number"){
				setSingleId(id)
			}
	};

	return (
		<>
			<div
				className="movie"
				onClick={()=>handleMovieClick(movie.id)}>

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
