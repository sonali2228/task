// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function Login() {
  const [usr, setUsr] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate=useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.get(
        'https://assignment.8848digitalerp.com/api/method/assignment.API.access_token.get_access_token',
        {
          params: { usr, pwd },
        }
        
      );
      if(response?.data?.message?.msg==="success"){
        localStorage.setItem('access_token', JSON.stringify(response?.data?.message?.data?.access_token));
        navigate("/Listing")
      }
console.log(response)
    } catch (error) {
     console.error("error")
    }
  };

  return (
    <div>
    <form>
    <div className='card'>
    <div className='container'>
      <input 
        type="text"
        placeholder="User Email ID"
        value={usr}
        onChange={(e) => setUsr(e.target.value)}
      />
      <br/>
      <input
        type="password"
        placeholder="User Password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <br/>
      <button onClick={handleLogin}>Login</button>
      </div>
      </div>
      </form>
    </div>
  );
}

export default Login;