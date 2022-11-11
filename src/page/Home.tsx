import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {Movies} from '../../typings';
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
			const result:Movies=data.results[0];
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
						<img
						src={`https://image.tmdb.org/t/p/original/${latest.backdrop_path}`}
						alt={latest.title}
					/>
					<p className="homepage__trending">#1 Trending</p>
					</div>
					
			)}
			<Actions/>
			<ListOfMoviesComponent category="Popular"/>
		</div>
	);
};

export default Home;
