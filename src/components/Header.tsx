import {Link} from 'react-router-dom'
import Logo  from '../assets/svg/logoN.svg'
const Header = () => {
  return (
    <header className='header'>
        <nav className='header__nav'>
            <Link to={'/'} className='header__link'>
                <img src={Logo} alt="" />
            </Link>
            <Link to={'#'} className='header__link'>
                TV Shows
            </Link>
            <Link to={'#'} className='header__link'>
                Movies
            </Link>
            <Link to={'#'} className='header__link'>
                My Lists
            </Link>
        </nav>
    </header>
  )
}

export default Header