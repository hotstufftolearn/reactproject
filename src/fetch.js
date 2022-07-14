import React,{useState, useEffect} from "react";


const Appa = () => {
//Our State.
  const [users, setUsers] = useState([])
 useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(err => console.log(err))
  },[]);
return (
    <div className="container">
      <h1 className="h1">Fetching data using API</h1>
      <ul>
        {users.map(user => <li key={user.id}><p></p>{user.name}<p></p>{user.username}<p></p>{user.email}<p></p>{user.website}</li>)}
      </ul>

    </div>
  )
};
export default Appa;