import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (userId) {
          const response = await axios.get(`/api/v1/user//users/${userId}`);
          const { name } = response.data; // Assuming response.data is { name: "User's Name" }
          setUserName(name);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUserName('User');
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  const handleLogout = () => {
    localStorage.removeItem('userId');
    console.log('User logged out');
  };

  return (
    <div>
      <p>Welcome, {userName || 'User'}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
