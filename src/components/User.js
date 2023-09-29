import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function User() {
  const { userName } = useParams();
  const [modifiedData, setModifiedData] = useState({});
  const navigate=useNavigate();

  useEffect(() => {
    const config = {
      headers:{
        Authorization: JSON.parse( localStorage.getItem("access_token")),
      }
    };
    axios.get(`https://assignment.8848digitalerp.com/api/method/assignment.API.specific_user.get_specific?name1=${userName}`, config)
      .then((response) => {
        setModifiedData(response?.data?.message?.data?.specific_user?.[0]);
      })
      .catch((error) => {
        console.log("error")
      });
  }, [userName]);

  const handleSave = async () => {
    try {
      const config = {
        headers:{
          Authorization: JSON.parse( localStorage.getItem("access_token")),
        }
      };
      await axios.put(`https://assignment.8848digitalerp.com/api/resource/Assignment/${userName}`, modifiedData, config);
      navigate("/listing");
    } catch (error) {
      // Handle update error
    }
  };
  console.log(modifiedData)
  return (
    <div>
      <h2>User Page</h2>
      <input
        type="text"
        placeholder="User Name"
        value={modifiedData.name1 || ''}
        onChange={(e) => setModifiedData({ ...modifiedData, name1: e.target.value })}
      />
      <input
        type="text"
        placeholder="User Age"
        value={modifiedData.age || ''}
        onChange={(e) => setModifiedData({ ...modifiedData, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="User Gender"
        value={modifiedData.gender || ''}
        onChange={(e) => setModifiedData({ ...modifiedData, gender: e.target.value })}
      />
      <input
        type="text"
        placeholder="User Company Name"
        value={modifiedData.company_name || ''}
        onChange={(e) => setModifiedData({ ...modifiedData, company_name: e.target.value })}
      /><br/>
      <button onClick={()=>navigate("/listing")}>Back</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default User;