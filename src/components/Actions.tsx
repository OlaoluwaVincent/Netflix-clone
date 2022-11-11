import {ReactComponent as AddIcon} from '../assets/svg/addWhite.svg'
import {ReactComponent as PlayIcon} from '../assets/svg/play.svg'
import {ReactComponent as InfoIcon} from '../assets/svg/infoWhite.svg'


const Actions = () => {
	return (
		<div className="actions">
			<div className="action">
				<AddIcon />
				My List
			</div>
			<button className="action__button">
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
