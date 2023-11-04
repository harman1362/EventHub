import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Logout() {
  const [logoutMessage, setLogoutMessage] = useState('');
  const navigate = useNavigate();


  const handleLogout = () => {
    axios.get('http://localhost:2300/logout')
      .then(response => {
        if (response.status === 200) {
          alert("Logout Succesful");
          navigate("/login");
        } else {
          setLogoutMessage('Logout failed');
        }
      })
      .catch(error => {
        console.error(error);
        setLogoutMessage('An error occurred during logout');
      });
  };

  useEffect(() => {
    handleLogout();
  }, []);


  

  return (
    <>
      
    </>
  );
}

export default Logout;