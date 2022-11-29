import {Routes,Route} from 'react-router-dom';
import SearchedMovie from '../components/SearchedMovie';
import Home from './Home';
import Users from './Users';

const AllPages = () => {
    return (
        <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/:loggedInUser' element={<Home/>}/>
        <Route path='/search' element={<SearchedMovie/>}/>
        </Routes>
      )
}

export default AllPages