import { useNavigate, useParams } from 'react-router-dom';
import useSwr from 'swr';
// Typings
import { Cast, Video, DetailedMovie } from '../../typings';
import { MovieVideo } from '../../utils/dataFetching';
import { useState, useEffect, useContext } from 'react';
import MovieContainer from '../components/MovieContainer';
import { SeachedContent } from '../context/searchContext';
import { ReactComponent as AddIcon } from '../assets/svg/addWhite.svg';

type Props = {
	data: DetailedMovie;
	error: {
		status_code: number;
		status_message: string;
		success: boolean;
	};
};

type Context = {
	saveToFavorite: (data?: DetailedMovie) => void;
};
const MovieDetail = () => {
	// ID comes from the url on the browser
	const [video, setVideo] = useState<Video>();
	const [cast, setCast] = useState<Cast[]>([]);
	const [similarMovies, setSimilarMovies] = useState<DetailedMovie[]>([]);
	const { id } = useParams();
	const navigate = useNavigate();
	if (!id) {
		navigate(-1);
	}

	const { saveToFavorite } = useContext(SeachedContent) as Context;

	const fetcher = (url: string) =>
		fetch(url).then((r) => {
			if (!r.ok) {
				throw new Error('Invalid URL');
			}
			return r.json();
		});

	const { data, error } = useSwr(
		`https://api.themoviedb.org/3/movie/${id}?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US`,
		fetcher,
		{ suspense: true }
	) as Props;

	useEffect(() => {
		let mounted = true;

		const crewCastDetails = async () => {
			// Region can be specified
			try {
				const res = await fetch(
					`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US`
				);
				const data = await res.json();
				setCast(data.cast.slice(0, 10));
			} catch (error) {
				console.log(error);
			}
		};
		const similarMovie = async () => {
			// Region can be specified
			try {
				const res = await fetch(
					`https://api.themoviedb.org/3/movie/${id}/similar?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US&page=1`
				);
				const data = await res.json();
				setSimilarMovies(data.results);
			} catch (error) {
				console.log(error);
			}
		};

		crewCastDetails();
		similarMovie();

		return () => {
			mounted = false;
		};
	}, []);

	const playMovie = async () => {
		const val = await MovieVideo(data.id);
		setVideo(val);
	};
	// Function for the SWR call

	return (
		<div className='page moviePage'>
			<div>
				<div
					className={`${
						video ? 'homepage__video' : ' homepage__image'
					} moviepage__video`}
				>
					<div className='homepage__img'>
						{video ? (
							<iframe
								src={`https://www.youtube.com/embed/${video?.key}?autoplay=0&controls=0&origin=http://localhost:5173`}
								typeof='text/html'
								className='homeFrame'
							/>
						) : (
							<img
								src={
									!data.poster_path
										? `https://image.tmdb.org/t/p/original/${data.poster_path}`
										: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
								}
								alt={data.title}
							/>
						)}
					</div>
				</div>
				<div className='moviePage__detail-content'>
					<span>{data.release_date}</span>
					<span className='hd'>HD</span>
					<AddIcon onClick={() => saveToFavorite(data)} />
				</div>
				<div className='genre'>
					{data.genres.map((genre) => (
						<span key={genre.id}>{genre.name}</span>
					))}
				</div>
				{!video ? (
					<button
						type='button'
						className='moviePage__play-button'
						onClick={playMovie}
					>
						Play
					</button>
				) : (
					<button
						type='button'
						className='moviePage__play-button'
						style={{ background: 'black', color: 'whitesmoke' }}
						onClick={() => setVideo(undefined)}
					>
						Pause
					</button>
				)}

				<div className='moviePage__full-details'>{data.overview}</div>
				{cast.length > 1 && (
					<div className='moviePage__cast-crew'>
						Cast:{' '}
						{cast.map((c) => (
							<span key={c.id} style={castStyle}>
								{c.name}
								{', '}
							</span>
						))}
					</div>
				)}
			</div>
			{similarMovies.length > 1 && (
				<div className='listofmovies'>
					<h1 className='category__header'>Similar Movie</h1>
					<div className='movies'>
						{similarMovies.map((movies) => (
							<MovieContainer
								key={`${movies.id}-${movies.title}`}
								movie={movies}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default MovieDetail;

const castStyle = {
	fontSize: '12px',
	color: 'inherit',
} as React.CSSProperties;
