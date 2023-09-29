// Listing.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Listing() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const config = {
      headers:{
        Authorization: JSON.parse( localStorage.getItem("access_token")),
      }
    };
    const url = 'https://assignment.8848digitalerp.com/api/method/assignment.API.all_users_api.get_user';
    
    axios.get(url, config)
      .then((response) => {
        console.log(response)
        setUsers(response?.data?.message?.data);
      })
      .catch((error) => {
        // Handle error
        console.log(error)
      });
  }, []);
  console.log(users)
  return (
    <div>
      <h1>All Users</h1>
      <button onClick={()=>navigate("/")}>Logout</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={`/user/${user.name1}`}>{user.name1}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listing;