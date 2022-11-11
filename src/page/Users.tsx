import UserBox from "../components/UserBox";
type Props = {
    names:string[]
}

function Users() {
    const names =['Okiki', 'John', 'Olaoluwa']
  return (
    <div className="usersContainer">
  { names.map((name)=>(
    <UserBox userName={name}/>
   ))}
    </div>
  )
}

export default Users