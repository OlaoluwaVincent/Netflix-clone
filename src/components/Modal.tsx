import { ReactComponent as Play } from "../assets/svg/play.svg";
import { ReactComponent as AddtoList } from "../assets/svg/add.svg";
import { ReactComponent as DownArrow } from "../assets/svg/reveal.svg";

type Props = {};

const Modal = (props: Props) => {
	return (
		<>
			{/* Controllers and Details */}
			<div className="movieBottom">
				<div className="movieController">
					<Play />
					<AddtoList />
					<DownArrow />
				</div>
				<div className="features">
					{!movie.adult ? (
						<span className="young ageRate">16</span>
					) : (
						<span className="adult ageRate">18+</span>
					)}
					<span className="quality">HD</span>
				</div>
				<div className="genre">
					{movie.genre_ids.map((genre) => (
						<span>{genre}</span>
					))}
				</div>
			</div>
		</>
	);
};

export default Modal;
