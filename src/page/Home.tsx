import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Actions from "../components/Actions";
import ListOfMoviesComponent from "../components/ListOfMoviesComponent";
// Utilities
import { getPopularMovies } from "../../utils/dataFetching";
// TYPINGS
import { Movies, Video } from "../../typings";

const Home = () => {
	const [result, setResult] = useState<Movies | undefined>();
	const [video, setVideo] = useState<Video | undefined>();
	const { loggedInUser } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		let mounted = true;

		const wait: (func: Function) => Promise<void> = async (func) => {
			const res = await func();
			setResult(res[0]);
		};

		if (mounted) {
			if (!loggedInUser) {
				navigate("/");
			} else {
				wait(getPopularMovies);
			}
		}
		return () => {
			mounted = false;
		};
	}, [loggedInUser]);

	if (!result) {
		return <p className="loading">Loading...</p>;
	}

	return (
		<div className="homepage">
			{result && (
				<div className={`${video ? "homepage__video" : " homepage__image"}`}>
					<div className="homepage__img">
						{video ? (
							<iframe
								src={`https://www.youtube.com/embed/${video?.key}?autoplay=0&controls=0&origin=http://localhost:5173`}
								typeof="text/html"
								className="homeFrame"
							/>
						) : (
							<img
								src={
									!result.poster_path
										? `https://image.tmdb.org/t/p/original/${result.poster_path}`
										: `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
								}
								alt={result.title}
							/>
						)}
					</div>

					<p className="homepage__trending">#1 Trending- {result.title}</p>
				</div>
			)}
			<Actions
				movie={result}
				setVideo={setVideo}
			/>
			<ListOfMoviesComponent category="my list" />
			<ListOfMoviesComponent category="popular" />
			<ListOfMoviesComponent category="trending" />
			<ListOfMoviesComponent category="now playing" />
		</div>
	);
};

export default Home;
