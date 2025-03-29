import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Admin from './components/Admin';
import About from './components/About';
import Products from './components/Products';

// Protected Route component
function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
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
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/products" className="nav-item">Products</Link>
        <div className="nav-item">Apply</div>
        <div className="nav-item">Support</div>
        <Link to="/login" className="nav-item">Login</Link>
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
    <Router basename="/arg_mia">
      <div className="App">
        <Navigation showNav={showNav} setShowNav={setShowNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route 
            path="/x7k9m2p4q8"  //this is a random string to protect admin page
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 