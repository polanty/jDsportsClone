import React from "react";
import ReactDOM from "react-dom/client";

import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { Navigation } from "./Navigation";
import Home from "./Home";
import Shop from "./Shop";
import Checkout from "./Checkout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="Shop" element={<Shop />}></Route>
        <Route path="Checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
}
