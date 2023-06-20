import React, { useState } from "react";
import "./Styles/CreateProduct.css";

function CreateProduct() {
  const [name, setName] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <div className="product-form">
      <form onSubmit={handleSubmit}>
        <h2>Create New Product</h2>
        <input
          placeholder="Product Title"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Product Price"
          type="number"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Product Description"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Product Image URL"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Create New Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;
