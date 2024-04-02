import { useState, useContext, createContext } from "react";

// one array holds all the objects that will be rendered to the cart items;

export const ProductLiteralContext = createContext({
  cartItem: null,
  setCartItem: () => null,
  cartCount: 0,
  setCartCount: () => null,
});

export const ProductContextProvider = ({ children }) => {
  return (
    <ProductLiteralContext.Provider>{children}</ProductLiteralContext.Provider>
  );
};
