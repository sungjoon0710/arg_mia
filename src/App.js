import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Admin from './components/Admin';
import About from './components/About';
import Products from './components/Products';
import Directory from './components/Directory';
import { AuthProvider, useAuth } from './context/AuthContext';
import UserBar from './components/UserBar';

// Protected Route component
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

function Navigation({ showNav, setShowNav }) {
  return (
    <>
      <button className="nav-toggle" onClick={() => setShowNav(!showNav)}>
        ☰
      </button>
      <nav className={`nav-bar ${showNav ? 'show' : 'hide'}`}>
        <div className="nav-links">
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/products" className="nav-item">Products</Link>
          <div className="nav-item">Apply</div>
          <Link to="/directory" className="nav-item">Directory</Link>
          <Link to="/login" className="nav-item">Login</Link>
        </div>
        <UserBar />
      </nav>
    </>
  );
}

function Home() {
  return (
    <header className="App-header">
      <p>REACH HIGHER</p>
      <h1>BABEL</h1>
    </header>
  );
}

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navigation showNav={showNav} setShowNav={setShowNav} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/directory" element={<Directory />} />
            <Route 
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 