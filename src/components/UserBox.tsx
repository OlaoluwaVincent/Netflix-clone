import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SeachedContent } from '../context/searchContext';

type Props = { userName: string };

type UserProps = {
	setLoggedInUser: (value: React.SetStateAction<string | undefined>) => void;
	loggedInUser: string | undefined;
};

const UserBox = ({ userName }: Props) => {
	const { loggedInUser, setLoggedInUser } = useContext(
		SeachedContent
	) as UserProps;

	return (
		<Link
			to={`/`}
			className='userBox'
			onClick={() => setLoggedInUser(userName)}
		>
			<p>{userName}</p>
		</Link>
	);
};

export default UserBox;
