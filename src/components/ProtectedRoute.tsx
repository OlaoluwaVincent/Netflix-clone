import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { SeachedContent } from '../context/searchContext';

type Props = {
	setLoggedInUser: (value: React.SetStateAction<string | undefined>) => void;
	loggedInUser: string | undefined;
};

const PrivateRoute = () => {
	const { loggedInUser, setLoggedInUser } = useContext(
		SeachedContent
	) as Props;

	return loggedInUser ? <Outlet /> : <Navigate to={'/signin'} />;
};

export default PrivateRoute;
