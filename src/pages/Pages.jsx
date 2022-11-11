import {Route} from 'react-router-dom'
import Users from './Users'

const Pages = () => {
  return (
    <>
    <Route path='/' element={<Users/>}/>
    </>
  )
}

export default Pages