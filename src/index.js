import React from "react";
import ReactDOM from "react-dom/client";

import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./Contexts/Cart.context";
import { ProductContextProvider } from "./Contexts/Products.context";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Load your Stripe publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

root.render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductContextProvider>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </ProductContextProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
