import { getAllProductsFromCloud } from "./Utilities/cloudfile";
import { useLocation, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductLiteralContext } from "./Contexts/Products.context";
import LocationMap from "./components/Location-Map/LocationMap.components";
import { Button } from "./components/Button.componets";
import { FooterImageLinks } from "./assets/products/footerLinks";

const Checkout = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [isLoading, setIsloading] = useState(true);
  const [cloudproducts, setCloudProducts] = useState([]);
  const [error, setError] = useState(null);

  const {
    cartItemContainer,
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
          <div className="shipping__container">
            <div className="qualified__delivery">
              <h3> You have qualified for</h3>
              <h3> FREE Standard Delivery</h3>
            </div>

            <div className="standard_delivery">
              <h1 className="standard_delivery--heading">
                When will my order arrive?
              </h1>

              <div className="standard_delivery--details">
                <h1>Click & Collect (Free)</h1>
                <p>Collect within 3 - 5 working days</p>
                <p>Store will keep for 14 days</p>
              </div>

              <div className="standard_delivery--details">
                <h1>Same Day Click & Collect (Free)</h1>
                <p>Collect within the same day</p>
                <p>Order before 3pm for select stores</p>
              </div>
            </div>
          </div>

          <div className="price__container">
            <div className="total--price__container">
              <h3 className="basket__totale">Basket Total</h3>

              <h3 className="basket__total--price">{`${totalPrice}$`}</h3>
            </div>

            <Button
              btnclass={"btn-primary btn-checkout"}
              title={"Checkout securely"}
              // onClick={CallNavigate}
            />
            <div className="payment-icon__container">
              {FooterImageLinks.filter((_, i) => i < 4).map((ele, i) => {
                return (
                  <img
                    src={ele}
                    alt="payment__logo"
                    className="footer__payment-logo"
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
