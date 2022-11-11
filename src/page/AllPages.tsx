import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Users from './Users';

const AllPages = () => {
    return (
        <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/:loggedInUser' element={<Home/>}/>
        </Routes>
      )
}

export default AllPages