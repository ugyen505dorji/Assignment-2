import React from "react";
import "./Styles/NavBar.css";
import Logo from "../../Assets/spark.png";
import { useNavigate } from "react-router-dom";

function NavBar() {
  let nav = useNavigate();
  let path = ["/", "/createProduct", "/cart"];
  function handleClick(index: number) {
    nav(path[index]);
  }
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
          <li className="nav-element" onClick={() => handleClick(0)}>
            All Product
          </li>
          <li className="nav-element" onClick={() => handleClick(1)}>
            Create Product
          </li>
          <li className="nav-element" onClick={() => handleClick(2)}>
            Your Cart
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
