import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import WaitingState from "../components/WaitingState";

const SearchedMovie = lazy(() => import("./SearchedMovie"));
const Home = lazy(() => import("./Home"));
const Users = lazy(() => import("./Users"));
const Movie = lazy(() => import("./MovieDetail"));

const AllPages = () => {
	return (
		<Suspense fallback={<WaitingState/>}>
			<Routes>
				<Route
					path="/"
					element={<Users />}
				/>
				<Route
					path="/:loggedInUser"
					element={<Home />}
				/>
				<Route
					path="/search"
					element={<SearchedMovie />}
				/>
				<Route
					path="/movie/:id"
					element={<Movie />}
				/>
			</Routes>
		</Suspense>
	);
};

export default AllPages;
