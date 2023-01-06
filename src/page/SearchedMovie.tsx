import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movies } from '../../typings';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ReactComponent as PlayIcon } from '../assets/svg/play.svg';
import { SeachedContent } from '../context/searchContext';
import SearchInput from '../components/SearchInput';

type Props = {
	searchContext: Movies[];
};

const SearchedMovie = () => {
	const { searchContext } = useContext(SeachedContent) as Props;
	const [movies, setMovies] = useState<Movies[]>([]);

	useEffect(() => {
		setMovies(searchContext);
	}, [searchContext]);

	// Search comes from the CONTEXT state management
	const navigate = useNavigate();

	const filterItem = (curcat: string) => {
		const newItem = searchContext.filter((newVal) => {
			return newVal.media_type === curcat;
			// comparing category for displaying data
		});
		setMovies(newItem);
	};

	// Navigate to the Movie Page
	const handleMovieClick = (data: Movies) => {
		navigate('/movie/' + data.id);
	};

	const filt = [...new Set(searchContext.map((Val) => Val.media_type))];

	const options = () => (
		<div style={styleDiv}>
			{filt.map((title) => (
				<button
					key={title}
					style={styledButton}
					onClick={() => filterItem(title)}
				>
					{title}
				</button>
			))}
			{filt.length >= 2 && (
				<button
					onClick={() => setMovies(searchContext)}
					style={styledButton}
				>
					All <span style={spanStyle}>{searchContext.length}</span>
				</button>
			)}
		</div>
	);

	return (
		<>
			<div className='searchPage page'>
				<SearchInput />
				<div className='searchedMovies'>
					{options()}
					{movies.map((movie) => (
						<div
							key={movie.id}
							className='searchedMovie'
							onClick={() => handleMovieClick(movie)}
						>
							<div className='searchedMovieImage'>
								<LazyLoadImage
									className='searchImage'
									src={
										movie.backdrop_path === null
											? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
											: `https://image.tmdb.org/t/p/original${movie.poster_path}`
									}
									alt={movie.original_title}
								/>
							</div>

							<p className='searchTitle'>
								{movie.original_title || movie.original_name}{' '}
								<br></br> <span>{movie.release_date}</span>
							</p>
							<p className='movieId'>{movie.id}</p>
							<PlayIcon className='playIcon' />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default SearchedMovie;

const styleDiv = {
	display: 'flex',
	gap: '30px',
	width: '100%',
	paddingLeft: '20px',
	marginBottom: '20px',
} as React.CSSProperties;

const styledButton = {
	padding: '8px 16px',
	background: '#6d6d6ead',
	outline: 'none',
	border: 'none',
	color: 'white',
	textTransform: 'capitalize',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '8px',
} as React.CSSProperties;

const spanStyle = {
	background: 'lightgrey',
	height: '20px',
	width: '20px',
	borderRadius: '50%',
	fontSize: '70%',
	color: 'black',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
} as React.CSSProperties;
