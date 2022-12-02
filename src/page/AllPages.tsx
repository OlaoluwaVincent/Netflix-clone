import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const SearchedMovie = lazy(() => import("./SearchedMovie"));
const Home = lazy(() => import("./Home"));
const Users = lazy(() => import("./Users"));
const Movie = lazy(() => import("./MovieDetail"));

const AllPages = () => {
	return (
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
				element={
					<Suspense fallback={<p>Durrhhh</p>}>
						<Movie />
					</Suspense>
				}
			/>
		</Routes>
	);
};

export default AllPages;
