import UserBox from "../components/UserBox";
type Props = {
    names:string[]
}

function Users() {
    const names =['Okiki', 'John', 'Olaoluwa']
  return (
    <div className="usersContainer">
  { names.map((name, i)=>(
    <UserBox key={`${name}/${i}`} userName={name}/>
   ))}
    </div>
  )
}

export default Users