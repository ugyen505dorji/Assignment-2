import React from "react";
import "./Styles/NavBar.css";
import Logo from "../../Assets/spark.png";

function NavBar() {
  return (
    <header className="main-header">
      <div className="logo-section">
        <img
          src={Logo}
          alt="HU Logo"
          className="logo-image"
          height={"80px"}
          width={"80px"}
        />
        <h2 className="logo-text">
          Hub<span>Store</span>
        </h2>
      </div>
      <div className="nav-bar">
        <ul className="nav-section">
          <li className="nav-element">All Product</li>
          <li className="nav-element">Create Product</li>
          <li className="nav-element">Your Cart</li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
