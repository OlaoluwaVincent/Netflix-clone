import { Link } from 'react-router-dom';
import Logo from '../assets/svg/logoN.svg';
import { ReactComponent as SearchIcon } from '../assets/svg/search.svg';

const Header = () => {
	return (
		<>
			<p className='designer header__link'>
				Designed by: Olaoluwa.dev@gmail.com
			</p>
			<header className='header'>
				<nav className='header__nav'>
					<Link to={'/'} className='header__link'>
						<img src={Logo} alt='' />
					</Link>
					<Link to={'/mylist'} className='header__link'>
						My Lists
					</Link>
					<Link to={'/search'} className='header__link'>
						<SearchIcon
							height={32}
							width={24}
							className='header__search-icon'
						/>
					</Link>
				</nav>
			</header>
		</>
	);
};

export default Header;
