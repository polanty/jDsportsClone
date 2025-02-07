import { useState, createContext, useEffect } from "react";
import { getAllProductsFromCloud } from "../Utilities/cloudfile";
// import category from "../assets/products/categories";

// one array holds all the objects that will be rendered to the cart items;

export const ProductLiteralContext = createContext({
  cartItem: null,
  cloudProduct: [],
  setCloudProducts: () => null,
  setCartItem: () => null,
  cartItemContainer: null,
  setCartItemContainer: () => null,
  cartContainerCount: 0,
  setCartContainerCount: () => null,
  addToCart: () => null,
  recentlViewedContainer: null,
  setRecentlViewedContainer: () => null,
});

export const ProductContextProvider = ({ children }) => {
  const [cartItemContainer, setCartItemContainer] = useState([]);
  const [recentlViewedContainer, setRecentlViewedContainer] = useState([]);
  const [cartItem, setCartItem] = useState(null);
  // const [cartCount, setCartCount] = useState(0);
  const [stripePaymentSuccessfull, setStripePaymentSuccessfull] =
    useState(false);
  const [stripePaymentError, setStripePaymentError] = useState(false);
  const [cloudProduct, setCloudProducts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchProductsFromCloud = async () => {
      try {
        const pulledProducts = await getAllProductsFromCloud();
        setCloudProducts(pulledProducts[0].products);
      } catch (error) {
        setError(error);
      }
    };

    fetchProductsFromCloud();
  }, []);

  // console.log(cloudProduct);

  // functionality to add items to the cart array
  const addToCart = (products = [], cartItemId) => {
    //check if the item is already included in the array
    const found = cartItemContainer.find((ele) => ele.id === cartItemId);

    if (found) {
      return cartItemContainer.map((cartItem) =>
        cartItem.id === cartItemId
          ? { ...cartItem, productCount: cartItem.productCount + 1 }
          : cartItem
      );
    }

    const individualProduct = products.find((ele) => ele.id === cartItemId);

    return [...cartItemContainer, { ...individualProduct, productCount: 1 }];
  };

  //functionality to remove an item from the cart array

  const removeItemsFromCart = (cartItemId) => {
    //check if the item is already included in the array
    const found = cartItemContainer.find((ele) => ele.id === cartItemId);

    return cartItemContainer.filter((ele) => ele !== found);
  };

  //functionality to decrease the number of product within a cart array

  const removeSingleItem = (cartItemId) => {
    //check if the item is already included in the array
    const found = cartItemContainer.find((ele) => ele.id === cartItemId);

    //check if the count is not more than 1
    if (found && found.productCount === 1) {
      return cartItemContainer.filter((ele) => ele !== found);
    }

    //if it is greater than 1
    if (found.productCount > 1) {
      return cartItemContainer.map((cartItem) =>
        cartItem.id === cartItemId
          ? { ...cartItem, productCount: cartItem.productCount - 1 }
          : cartItem
      );
    }
  };

  //functionality to sum up the total number of element within the cart array
  const totalItems = cartItemContainer.reduce((acc, item) => {
    return acc + item.productCount;
  }, 0);

  //functionality to get the total amount of prices with an array

  const totalPrice = cartItemContainer.reduce((acc, item) => {
    const price = item.productCount * item.price;
    let totalBeforeTrunc = acc + price;
    let total = Math.trunc(totalBeforeTrunc * 100) / 100;

    return total;

    // return Math.trunc(total * 100) / 100;
  }, 0);

  const recentlyViewedProducts = (cartItem) => {
    //check if the item is already included in the array
    let cartItemId = cartItem.id;
    const found = recentlViewedContainer.find((ele) => ele.id === cartItemId);

    const foundIndex = recentlViewedContainer.indexOf(found);

    if (found) {
      //return recentlViewedContainer
      recentlViewedContainer.splice(foundIndex, 1);
      //recentlViewedContainer.push(found);
    }

    recentlViewedContainer.unshift(cartItem);
  };

  const value = {
    cloudProduct,
    error,
    cartItemContainer,
    setCartItem,
    addToCart,
    removeItemsFromCart,
    setCartItemContainer,
    removeSingleItem,
    totalItems,
    totalPrice,
    recentlViewedContainer,
    recentlyViewedProducts,
    setRecentlViewedContainer,

    // stripe payment  usestate
    stripePaymentSuccessfull,
    setStripePaymentSuccessfull,
    stripePaymentError,
    setStripePaymentError,
  };
  return (
    <ProductLiteralContext.Provider value={value}>
      {children}
    </ProductLiteralContext.Provider>
  );
};
