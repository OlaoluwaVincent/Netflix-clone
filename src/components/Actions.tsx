import { ReactComponent as AddIcon } from "../assets/svg/addWhite.svg";
import { ReactComponent as PlayIcon } from "../assets/svg/play.svg";
import { ReactComponent as InfoIcon } from "../assets/svg/infoWhite.svg";
import { Movies, Video } from "../../typings";
import { saveToFavorite,MovieVideo } from "../../utils/dataFetching";

interface Props {
	movie: Movies;
	setVideo: React.Dispatch<React.SetStateAction<Video | undefined>>
}
const Actions = ({ movie, setVideo }: Props) => {
	const handleClick = () => {
		saveToFavorite(movie);
	};

	const playMovie = async()=>{
		const val = await MovieVideo(movie.id)
		setVideo(val)
	}

	return (
		<div className="actions">
			<div className="action">
				<AddIcon onClick={handleClick} />
				Add to List
			</div>
			<button className="action__button" onClick={playMovie}>
				<PlayIcon /> Play
			</button>
			<div className="action">
				<InfoIcon />
				Info
			</div>
		</div>
	);
};

export default Actions;
