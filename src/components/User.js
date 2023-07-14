import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './/Navbar';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './User.css'
import './Navbar.css'
const User = () => {
  const [users, setUsers] = useState([]);
  const {count}=useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userPromises = [];
        for (let i = 0; i < count; i++) {
       
        userPromises.push(axios.get('https://random-data-api.com/api/v2/users'));
      }
      const responses = await Promise.all(userPromises);
      const userData = responses.map((response) => response.data);
     
      setUsers(userData);
      console.log(users)
     
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  fetchUsers();
}, [count]);
const handleViewDetails = (user) => {
  navigate('/userdetails', { state: user });
};

return (
  <><Navbar/>
  <div className="User">
    <div className="card-container">
      {users.map((user, index) => (
        <div className="card" key={user.id}>
          <img src={user.avatar} alt="Avatar" />
          <div className="card-info">
            <div className="id">ID: {user.id}</div>
            <div className="name">FULL NAME: {user.first_name + ' ' + user.last_name}</div>
            <div className="title">TITLE: {user.employment?.title}</div>
            <button className="btn-view" onClick={() => handleViewDetails(user)}>
              View 
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  </>
);
};

export default User;