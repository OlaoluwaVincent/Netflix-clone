type Props = {userName:string}

const UserBox = ({userName}: Props) => {
  return (
    <div>
        <p>{userName}</p>
    </div>
  )
}

export default UserBox