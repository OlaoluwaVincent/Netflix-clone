import { useState } from "react";
import UserBox from "../components/UserBox";
type Props = {
    names:string[]
}

function Users() {
    const names =['Okiki', 'John', 'Olaoluwa']
  return (
    <>
  { names.map((name)=>(
    <UserBox userName={name}/>
   ))}
    </>
  )
}

export default Users