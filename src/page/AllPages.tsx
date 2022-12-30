import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import WaitingState from '../components/WaitingState';
import PrivateRoute from '../components/ProtectedRoute';

const SearchedMovie = lazy(() => import('./SearchedMovie'));
const Home = lazy(() => import('./Home'));
const Users = lazy(() => import('./Users'));
const Movie = lazy(() => import('./MovieDetail'));
const MyList = lazy(() => import('./MyList'));

const AllPages = () => {
	return (
		<Suspense fallback={<WaitingState />}>
			<Routes>
				<Route path='/' element={<PrivateRoute />}>
					<Route path='/' element={<Home />} />
				</Route>
				<Route path='/movie/:id' element={<PrivateRoute />}>
					<Route path='/movie/:id' element={<Movie />} />
				</Route>
				<Route path='/mylist' element={<PrivateRoute />}>
					<Route path='/mylist' element={<MyList />} />
				</Route>
				<Route path='/signin' element={<Users />} />
				<Route path='/search' element={<SearchedMovie />} />
			</Routes>
		</Suspense>
	);
};

export default AllPages;
