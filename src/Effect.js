import React from 'react'
import {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
const Effect = () => {
    const[users,setUsers]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(data=>{
        setUsers(data);
        setLoading(false);
      })
      .catch(error=>{
        console.error("if it is not loading,will be error message")
        setLoading(false);
      })
    },[]);
    if(loading){
      return<h3>Loading...</h3>
    }
    return(
      <div>
        <h1>List out the users in API</h1>
        <ul>
          {users.map(user=>(
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
}

ReactDOM.render(<Effect/>,document.getElementById('root'));