import { ReactComponent as Play } from "../assets/svg/play.svg";
import { ReactComponent as AddtoList } from "../assets/svg/add.svg";
import { ReactComponent as DownArrow } from "../assets/svg/reveal.svg";
import { createPortal } from "react-dom";
import { DetailedMovie } from "../../typings";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getFullDetailOfMovie } from "../../utils/dataFetching";
import { useEffect, useState } from "react";

type Props = {
	open: boolean;
	close: () => void;
	id: number;
};

const Modal = ({ open, close, id }: Props) => {
	const [content, setContent] = useState<DetailedMovie | undefined>();
	useEffect(() => {
		let mounted = true;

		if (mounted) {
			const fetchData = async () => {
				const data = await getFullDetailOfMovie(id);
				setContent(data);
			};
			fetchData();
		}

		return () => {
			mounted = false;
		};
	}, [id]);

	if (!open) return null;
	if (!content) {
		return <p>Loading.....</p>;
	}

	return createPortal(
		<>
			<div
				style={Overlay_style}
				onClick={close}
			/>
			<div style={Modal_styles}>
				<LazyLoadImage
					src={content.backdrop_path === null ? `https://image.tmdb.org/t/p/original${content.backdrop_path}` : `https://image.tmdb.org/t/p/original${content.poster_path}`}
					alt={content.original_title}
					className="modal__img"
				/>
				{/* Controllers and Details */}
				<div className="modalBottom">
					<p>{content.title}</p>
					<div className="modalController">
						<Play className='modal__actions'/>
						<AddtoList className='modal__actions'/>
						<DownArrow className="modal__actions modalDownArrow" />
					</div>
					<div className="features">
						<span className="ageRate">
							{content.vote_average.toFixed(1)}
						</span>
						<span className={`ageRate ${content.adult ? 'adult' : 'young'}`}>{content.adult ? '18+' : 16}</span>
						<span className="quality">HD</span>
					</div>
					<div className="modal__overview">{content.overview}</div>
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

const Modal_styles = {
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%,-50%)",
	backgroundColor: "#141414",
	padding: "10px",
	zIndex: 1000,
	width: "80%",
	borderRadius: "8px",
};

const Overlay_style = {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: "rgba(0,0,0,0.6)",
	zIndex: 1000,
};
