import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "../components/Header";
import { Movies } from "../../typings";
import Actions from "../components/Actions";
import ListOfMoviesComponent from "../components/ListOfMoviesComponent";

const Home = () => {
	const [latest, setLatest] = useState<Movies | null>(null);
	const { loggedInUser } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (!loggedInUser) {
			navigate("/");
		} else {
			getLatest();
		}
		//   Allow only specific users
		//   if(loggedInUser ){
		//     navigate('/')
		// }
		return () => {};
	}, [loggedInUser]);

	const getLatest = async () => {
		try {
			const res = await fetch(
				"https://api.themoviedb.org/3/trending/all/day?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US"
			);
			const data = await res.json();
			const result: Movies = data.results[0];
			setLatest(result);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="homepage">
			<Header />
			{latest && (
				<div className="homepage__image">
					<LazyLoadImage
						src={`https://image.tmdb.org/t/p/original/${latest.poster_path}`}
						alt={latest.title}
						effect="blur"
						className="homepage_img"
					/>
					<p className="homepage__trending">#1 Trending</p>
				</div>
			)}
			<Actions />
			<ListOfMoviesComponent category="Popular Movies" />
			<ListOfMoviesComponent category="Trending on Netflix" />
			<ListOfMoviesComponent category="Top Series" />
		</div>
	);
};

export default Home;
