import { useEffect, useState, } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Movies } from "../../typings";
import Actions from "../components/Actions";
import ListOfMoviesComponent from "../components/ListOfMoviesComponent";
import { getPopularMovies } from "../../utils/dataFetching";
import SearchInput from "../components/SearchInput";


const Home = () => {
	const [result, setResult] = useState<Movies | undefined>();
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

	
	if(!result){
		return <p className="loading">Loading...</p>
	}

	
	return (
		<div className="homepage">
			<Header />
			{result && (
				<div className="homepage__image">
					<div className="homepage__img">
						<img
							src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
							alt={result.title}
						/>
					</div>

					<p className="homepage__trending">#1 Trending</p>
				</div>
			)}
			<Actions />
			<ListOfMoviesComponent category="popular" />
			<ListOfMoviesComponent category="trending" />
			<ListOfMoviesComponent category="now playing" />
		</div>
	);
};

export default Home;
