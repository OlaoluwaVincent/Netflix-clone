import { useContext } from 'react';
import { ReactComponent as AddIcon } from '../assets/svg/addWhite.svg';
import { ReactComponent as PlayIcon } from '../assets/svg/play.svg';
import { ReactComponent as InfoIcon } from '../assets/svg/infoWhite.svg';
import { Movies, Video } from '../../typings';
import { MovieVideo } from '../../utils/dataFetching';
import { SeachedContent } from '../context/searchContext';
import { Link } from 'react-router-dom';

interface Props {
	movie: Movies;
	setVideo: React.Dispatch<React.SetStateAction<Video | undefined>>;
}

interface context {
	saveToFavorite: (data?: Movies) => void;
}
const Actions = ({ movie, setVideo }: Props) => {
	const { saveToFavorite } = useContext(SeachedContent) as context;

	const handleClick = () => {
		saveToFavorite(movie);
	};

	const playMovie = async () => {
		const val = await MovieVideo(movie.id);
		setVideo(val);
	};
	return (
		<div className='actions'>
			<div className='action'>
				<AddIcon onClick={handleClick} />
				Add to List
			</div>
			<button className='action__button' onClick={playMovie}>
				<PlayIcon className='action_button' /> Play
			</button>
			<Link to={`movie/${movie.id}`} className='action'>
				<InfoIcon />
				Info
			</Link>
		</div>
	);
};

export default Actions;
