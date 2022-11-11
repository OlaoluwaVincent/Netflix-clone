import { useState, useEffect } from "react";
import { Movies } from "../../typings";
import MovieContainer from "./MovieContainer";


type Props = {
	category: string;
	link?: URL;
};
const ListOfMoviesComponent = ({ category, link }: Props) => {
	const [movieList, setMovieList] = useState<Movies[] | null>(null);
	useEffect(() => {
		getPopularMovies();
		return () => {};
	}, []);

	const getPopularMovies = async () => {
		try {
			const res = await fetch(
				"https://api.themoviedb.org/3/movie/popular?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US&page=1"
			);
			const data = await res.json();
			const result: Movies[] = data.results.slice(0, 10);
			setMovieList(result);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="listofmovies">
			<h1 className="category__title">{category}</h1>
			<div className="movies">
				{movieList &&
					movieList.map((movies) => (
						<MovieContainer
							key={`${movies.id}-${movies.title}`}
							movie={movies}
						/>
					))}
			</div>
		</div>
	);
};

export default ListOfMoviesComponent;
