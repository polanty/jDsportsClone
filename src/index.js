import React from "react";
import ReactDOM from "react-dom/client";

import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./Contexts/Cart.context";
import { ProductContextProvider } from "./Contexts/Products.context";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
