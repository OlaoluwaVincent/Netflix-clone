import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Movies } from "../../typings";

type Props = {
	movie: Movies;
};

const MovieContainer = ({ movie }: Props) => {

  // const ref = useRef()
  // const imageContainer = ref.current;

	const handleMouseEnter = (e: React.SyntheticEvent) => {
    // Add a class
		const parentClassList = e.target.parentElement?.classList;
		parentClassList.add("cool");
	};

	const handleMouseLeave = (e: React.SyntheticEvent) => {
    // Remove a class
		const parentElementClassList =
			e.target.parentElement?.classList;
      parentElementClassList.remove('cool');
	};
	return (
		<div
			className="movie"
			onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
			<LazyLoadImage
				src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
				alt={movie.original_title}
        className='movie__img'
			/>
		</div>
	);
};

export default MovieContainer;
