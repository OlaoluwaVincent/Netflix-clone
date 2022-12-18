import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Typing
import { DetailedMovie, Video } from "../../typings";
import { ReactComponent as AddIcon } from "../assets/svg/addWhite.svg";
// Utilities
import {
	getFullDetailOfMovie,
	MovieVideo,
	saveToFavorite,
} from "../../utils/dataFetching";

type Props = {
	open: boolean;
	close: () => void;
	id: number;
};

const Modal = ({ open, close, id }: Props) => {
	const [content, setContent] = useState<DetailedMovie | undefined>();
	const [video, setVideo] = useState<Video | undefined>();

	useEffect(() => {
		const fetchData = async () => {
			const data = await getFullDetailOfMovie(id);
			const vid = await MovieVideo(id);
			setVideo(vid);
			setContent(data);
			return;
		};
		fetchData();
	}, []);

	if (!open) return null;
	if (!content) {
		return <p>Loading.....</p>;
	}

	const handleClick = () => {
		saveToFavorite(content);
	};

	return createPortal(
		<>
			<div
				style={overlay}
				onClick={close}
			/>
			<div
				style={modal}
				className="modal">
				<iframe
					src={`https://www.youtube.com/embed/${video?.key}?autoplay=1&controls=0&origin=http://localhost:5173`}
					typeof="text/html"
					frameBorder={0}
					className="modal__iframe"
				/>

				<div className="modalBottom">
					<div className="modal__movie-details">
						<p className="modal__movie-title">{content.title}</p>
						<Link
							to={`/movie/${content.id}`}
							className="modal__movie-info">
							{" "}
							More Info
						</Link>
					</div>
					<div className="features">
						<span className="ageRate">{content.vote_average.toFixed(1)}</span>
						<span className={`ageRate ${content.adult ? "adult" : "young"}`}>
							{content.adult ? "18+" : 16}
						</span>
						<span className="quality">HD</span>
						<span>
							<AddIcon onClick={handleClick} />
						</span>
					</div>
					<p className="modal__overview">{content.overview}</p>
					<div className="genre">
						{content.genres.map((genre) => (
							<span key={genre.id}>{genre.name}</span>
						))}
					</div>
				</div>
			</div>
		</>,
		document.getElementById("modal") as HTMLElement
	);
};

export default Modal;

const modal = {
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%,-50%)",
	backgroundColor: "#141414",
	padding: "10px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	zIndex: 1000,
	borderRadius: "8px",
} as React.CSSProperties;

const overlay = {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: "rgba(0,0,0,0.6)",
	zIndex: 1000,
} as React.CSSProperties;
