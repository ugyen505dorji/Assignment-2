import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./Components/Nav/NavBar";
import Home from "./Pages/Home/Home";
import CreateProduct from "./Pages/Create_Product/CreateProduct";
import Cart from "./Pages/Cart/Cart";
import Detail from "./Pages/Detail/Detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
