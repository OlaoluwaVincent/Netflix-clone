import React, { useContext, useState, useEffect } from 'react';
import { Movies } from '../../typings';
import { SeachedContent } from '../context/searchContext';
import MovieContainer from './MovieContainer';

type localProps = {
	localStore: Movies[];
	setLocalStore: React.Dispatch<React.SetStateAction<Movies[]>>;
	saveToFavorite: (data?: Movies) => void;
};

const LocalStorageData = () => {
	const { localStore, saveToFavorite } = useContext(
		SeachedContent
	) as localProps;

	const [load, setLoad] = useState(false);

	useEffect(() => {
		saveToFavorite();
	}, []);

	if (localStore.length < 1) return null;

	return (
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
	);
};

export default LocalStorageData;
