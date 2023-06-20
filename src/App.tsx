import React from 'react';
import './App.css';

function App() {
  return (
    <header className="main-header">
      <div className="logo-section">
        <img src={''} alt="HU Logo" className="logo-image" />
        <h2 className="logo-text">Hub<span>Store</span></h2>
      </div>
      <div className="nav-bar">
        
          <ul className="nav-section">
            <li className="nav-element">All Product</li>
            <li className="nav-element">Category 1</li>
            <li className="nav-element">Category 1</li>
            <li className="nav-element">Category 1</li>
            <li className="nav-element">Create Product</li>
          </ul>
        </div>
      
    </header>
  );
}

export default App;
