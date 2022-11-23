import { useState } from "react";
import { Movies } from "../../typings";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ReactComponent as PlayIcon } from "../assets/svg/play.svg";

type Props = {
	movies: Movies[] | undefined;
};

const SearchedMovie = ({ movies }: Props) => {
	return (
		<div className="searchedMovies">
			{movies?.map((movie) => (
				<div className="searchedMovie">
					<LazyLoadImage
                    className="searchImage"
						src={
							movie.backdrop_path === null
								? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
								: `https://image.tmdb.org/t/p/original${movie.poster_path}`
						}
						alt={movie.original_title}
					/>
					<p className="searchTitle">{movie.title}</p>
					<PlayIcon className='playIcon' />
				</div>
			))}
		</div>
	);
};

export default SearchedMovie;
