import React from "react";
import "./Styles/Home.css";
import Logo from "./Assets/spark.png";
import Cards from "./Cards";

function Home() {
  return (
    <main>
      <div className="filter-div">
        <select name="type" className="filter">
          <option value="all">All Products</option>
          <option value="electronics">Electronics</option>
          <option value="home_kitchen">Home & Kitchen</option>
          <option value="clothing">Clothing</option>
          <option value="sports_outdoors">Sports & Outdoors</option>
        </select>
      </div>
      <div className="product">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </main>
  );
}

export default Home;
