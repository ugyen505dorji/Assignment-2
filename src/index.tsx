import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./Components/Nav/NavBar";
import Home from "./Pages/Home/Home";
import CreateProduct from "./Pages/Create_Product/CreateProduct";
import Cart from "./Pages/Cart/Cart";
import Detail from "./Pages/Detail/Detail";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <NavBar />
      {/* <Home /> */}
      {/* <CreateProduct /> */}
      {/* <Cart /> */}
      <Detail />
    </>
  </React.StrictMode>
);
