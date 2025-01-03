import { getAllProductsFromCloud } from "./Utilities/cloudfile";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductLiteralContext } from "./Contexts/Products.context";
import { UserContext } from "./Contexts/Cart.context";
//import category from "./assets/products/categories";
import LocationMap from "./components/Location-Map/LocationMap.components";
import { Button } from "./components/Button.componets";

const Checkout = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [isLoading, setIsloading] = useState(true);

  const {
    recentlViewedContainer,
    cartItemContainer,
    setCartItem,
    addToCart: addProductToCart,
    setCartItemContainer,
    removeItemsFromCart,
    removeSingleItem,
    totalItems,
    totalPrice,
  } = useContext(ProductLiteralContext);

  console.log(cartItemContainer);

  //The current location path
  const { pathname } = location;
  const locationPath = pathname.split("/");

  return (
    <>
      <LocationMap locationPath={locationPath} />
      <div>
        <div>
          {cartItemContainer.map((product, ind) => {
            return (
              <>
                <div>{product.name}</div>
                <div>{product.price}</div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Checkout;
