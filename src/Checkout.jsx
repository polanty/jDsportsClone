import { getAllProductsFromCloud } from "./Utilities/cloudfile";
import { useLocation, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductLiteralContext } from "./Contexts/Products.context";
import LocationMap from "./components/Location-Map/LocationMap.components";
import { Button } from "./components/Button.componets";

const Checkout = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [isLoading, setIsloading] = useState(true);
  const [cloudproducts, setCloudProducts] = useState([]);
  const [error, setError] = useState(null);

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

  //The current location path
  const { pathname } = location;
  const locationPath = pathname.split("/");

  return (
    <>
      <LocationMap locationPath={locationPath} />
      <div className="checkOut__container">
        <div className="checkOut__container__products">
          <div className="checkout__header__container">
            <h2 className="checkout__header">{`My Bag (${totalItems})`}</h2>
          </div>
          {cartItemContainer.map((product, ind) => {
            return (
              <div key={ind} className="checkout__products">
                {console.log(product)}
                <div className="checkout__products-imageContainer">
                  <img
                    src={product.image.full}
                    alt={product.name}
                    className="checkout__products-image"
                  />
                  <Button
                    onClick={() =>
                      setCartItemContainer(removeItemsFromCart(product.id))
                    }
                    title={"Remove"}
                    btnclass={"CheckOut__remove-products"}
                  >
                    Remove
                  </Button>
                </div>
                <div className="checkout__products-Desciption">
                  <h2>{product.name}</h2>
                  <h2>{`$${product.price}`}</h2>
                  <h2>Code {product.id}</h2>
                </div>
                <div className="checkout__products-buttons">
                  <div className="checkOut__container__buttons">
                    <Button
                      onClick={() =>
                        setCartItemContainer(
                          addProductToCart(cartItemContainer, product.id)
                        )
                      }
                      title={"+"}
                      btnclass={"CheckOut__Adding-products"}
                    />

                    <h3>{product.productCount}</h3>
                    <Button
                      onClick={() =>
                        setCartItemContainer(removeSingleItem(product.id))
                      }
                      title={"-"}
                      btnclass={"CheckOut__Subtracting-products"}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="checkOut__container__payment">
          <h1>Payments</h1>
        </div>
      </div>
    </>
  );
};

export default Checkout;
