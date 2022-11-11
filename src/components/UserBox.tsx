import {Link} from 'react-router-dom'

type Props = {userName:string}

const UserBox = ({userName}: Props) => {

  return (
    <Link to={`/${userName}`} className="userBox">
        <p>{userName}</p>
    </Link>
  )
}

export default UserBox