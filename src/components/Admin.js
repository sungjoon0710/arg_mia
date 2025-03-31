import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../App.css';

function Admin() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout} className="admin-logout-button">Logout</button>
      </div>
      <div className="admin-content">
        <h3>Welcome, Administrator</h3>
        <p>This is the admin dashboard. You have successfully logged in.</p>
      </div>
    </div>
  );
}

export default Admin; 