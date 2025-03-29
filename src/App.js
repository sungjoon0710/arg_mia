import React, { useState } from 'react';
import './App.css';

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App">
      <button className="nav-toggle" onClick={() => setShowNav(!showNav)}>
        ☰
      </button>
      <nav className={`nav-bar ${showNav ? 'show' : 'hide'}`}>
        <div className="nav-item">About</div>
        <div className="nav-item">Products</div>
        <div className="nav-item">Apply</div>
        <div className="nav-item">Support</div>
        <div className="nav-item">Login</div>
      </nav>
      <header className="App-header">
        <p>REACH HIGHER</p>
        <h1>BABEL</h1>
      </header>
    </div>
  );
}

export default App; 