import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/product/Details";
import Tick from "./pages/ticket/Tick";
import Products from "./pages/Products";
import Category from "./pages/products/Category";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Products />} path="/products" />
          <Route element={<Details />} path="/product/:slug" />
          <Route element={<Category />} path="/products/categories/:cat" />
          <Route element={<Tick />} path="/ticket/:id" />
        </Route>
      </Routes>

      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
