import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../App.css';

const UserBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  console.log('UserBar - Current user:', user); // Debug log

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    console.log('UserBar - No user, returning null'); // Debug log
    return null;
  }

  return (
    <div className="user-bar">
      <span className="username">Welcome, {user.username}</span>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default UserBar; 