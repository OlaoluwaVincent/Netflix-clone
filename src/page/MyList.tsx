import { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { Movies } from '../../typings';
import { ReactComponent as PlayIcon } from '../assets/svg/play.svg';
import { ReactComponent as Empty } from '../assets/svg/void.svg';
import { SeachedContent } from '../context/searchContext';
import { useEffect } from 'react';
import MovieContainer from '../components/MovieContainer';

type Props = {
	localStore: Movies[];
	saveToFavorite: (data?: Movies) => void;
};

const MyList = () => {
	const { localStore, saveToFavorite } = useContext(SeachedContent) as Props;
	const navigate = useNavigate();
	useEffect(() => {
		saveToFavorite();
	}, []);
	// Navigate to the Movie Page
	const handleMovieClick = (data: Movies) => {
		navigate('/movie/' + data.id);
	};

	return (
		<div className='page'>
			{localStore.length < 1 ? (
				<div className='empty'>
					<h1 className='empty-heading'>
						OOPS!!! <br /> You have not saved any movie to list yet
					</h1>
					<Empty width='90vw' />
				</div>
			) : (
				<div className='searchedMovies'>
					<div className='listofmovies'>
						<h1 className='category__header'>My List</h1>
						<div className='movies'>
							{localStore &&
								localStore.map((movies) => (
									<MovieContainer
										key={`${movies.id}-${movies.title}`}
										movie={movies}
									/>
								))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MyList;
