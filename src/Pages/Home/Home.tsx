import React, { useState } from "react";
import "./Styles/Home.css";
import Cards from "./Cards";
import Data from "../../Data/Data";
import { useNavigate } from "react-router-dom";

function Home() {
  const [value, setValue] = useState("All");
  const [product, setProduct] = useState(Data);

  const handleSelect = (e: any) => {
    let tempValue = e.target.value;

    let newData: any = [];

    Data.forEach((item) => {
      if (item.category === tempValue && tempValue !== "All") {
        newData.push(item);
      }
      if (tempValue === "All") {
        newData.push(item);
      }
    });
    setValue(tempValue);
    setProduct(newData);
  };

  return (
    <main>
      <div className="filter-div">
        <select
          name="type"
          className="filter"
          value={value}
          onChange={handleSelect}
        >
          <option value="All">All Products</option>
          <option value="Electronics">Electronics</option>
          <option value="Home & Kitchen">Home & Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Sports & Outdoors">Sports & Outdoors</option>
        </select>
      </div>
      <div className="product">
        {product.map((item) => (
          <Cards data={item} />
        ))}
      </div>
    </main>
  );
}

export default Home;
