import { useState, useEffect } from "react";
import { Movies } from "../../typings";
import MovieContainer from "./MovieContainer";
import {
	getPopularMovies,
	getTrendingMovies,
	getNowPlayingMovies,
} from "../../utils/dataFetching";

type Props = {
	category: "popular" | "trending" | "series" | "now playing";
};

const ListOfMoviesComponent = ({ category }: Props) => {
	const [result, setResult] = useState<Movies[] | undefined>();
	useEffect(() => {
		let mounted = true;
		/** Async function that awaits the function recieved*/
		const wait: (func: Function) => Promise<void> = async (func) => {
			const res:Movies[]= await func();
			setResult(res);
		};

		if (mounted) {
			switch (category) {
				case "popular":
					wait(getPopularMovies);
					break;
				case "trending":
					wait(getTrendingMovies);
					break;
				case "now playing":
					wait(getNowPlayingMovies);
					break;

				default:
					break;
			}
			//end of case statement
		}
		return () => {
			mounted = false;
		};
	}, []);

	return (
		<div className="listofmovies">
			<h1 className="category__header">{category}</h1>
			<div className="movies">
				{result &&
					result.map((movies) => (
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
