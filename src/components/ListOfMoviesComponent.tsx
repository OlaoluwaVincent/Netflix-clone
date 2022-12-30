import { useState, useEffect, useContext } from 'react';
import { Movies } from '../../typings';
import MovieContainer from './MovieContainer';
import {
	getPopularMovies,
	getTrendingMovies,
	getNowPlayingMovies,
} from '../../utils/dataFetching';
import { SeachedContent } from '../context/searchContext';

type Props = {
	category: 'popular' | 'trending' | 'series' | 'now playing' | 'my list';
};
type localProps = {
	localStore: Movies[];
	setLocalStore: React.Dispatch<React.SetStateAction<Movies[]>>;
	saveToFavorite: (data: Movies) => void;
};

const ListOfMoviesComponent = ({ category }: Props) => {
	const [result, setResult] = useState<Movies[] | undefined>();
	const { localStore, setLocalStore } = useContext(
		SeachedContent
	) as localProps;

	/** Async function that awaits the function recieved*/

	useEffect(() => {
		const wait: (func: Function) => Promise<void> = async (func) => {
			const res: Movies[] = await func();
			setResult(res);
		};
		let mounted = true;

		if (mounted) {
			switch (category) {
				case 'popular':
					wait(getPopularMovies);
					break;
				case 'trending':
					wait(getTrendingMovies);
					break;
				case 'now playing':
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
		<div className='listofmovies'>
			<h1 className='category__header'>{category}</h1>
			<div className='movies'>
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
