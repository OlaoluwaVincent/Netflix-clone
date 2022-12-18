import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { Movies } from "../../typings";
import { ReactComponent as PlayIcon } from "../assets/svg/play.svg";
import { ReactComponent as Empty } from "../assets/svg/void.svg";

type Props = {};

const MyList = (props: Props) => {
	const [data, setData] = useState<Movies[] | []>([]);
	const getData = localStorage.getItem("List");
	const navigate = useNavigate();

	useEffect(() => {
		let mounted = true;
		if (mounted && getData) {
			const res: Movies[] = JSON.parse(getData);
			const result: Movies[] = Object.values(
				res.reduce((acc, obj) => ({ ...acc, [obj.id]: obj }), {})
			);
			setData(result);
		}
		return () => {
			mounted = false;
		};
	}, []);

	// Navigate to the Movie Page
	const handleMovieClick = (data: Movies) => {
		navigate("/movie/" + data.id);
	};

	return (
		<div className="listpage">
			{data.length<1 ? (
				<div className="empty">
					<h1 className="empty-heading">
						OOPS!!! <br /> You have not saved any movie to list yet
					</h1>
					<Empty width="90vw" />
				</div>
			) : (
				<div className="searchedMovies">
					{data.map((movie) => (
						<div
							key={movie.id}
							className="searchedMovie"
							onClick={() => handleMovieClick(movie)}>
							<LazyLoadImage
								className="searchImage"
								src={
									movie.backdrop_path === null
										? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
										: `https://image.tmdb.org/t/p/original${movie.poster_path}`
								}
								alt={movie.original_title}
							/>
							<p className="searchTitle">
								{movie.original_title || movie.original_name} <br></br>{" "}
								<span>{movie.release_date}</span>
							</p>
							<p>{movie.id}</p>
							<PlayIcon className="playIcon" />
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default MyList;
