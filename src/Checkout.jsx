import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductLiteralContext } from "./Contexts/Products.context";
import LocationMap from "./components/Location-Map/LocationMap.components";
import CartIconSymbol from "./components/CartIcon/CartIcon.components";
import CartProducts from "./components/CheckOut-Product__List/CheckOutProduct.components";
import { Button } from "./components/Button.componets";
import { FooterImageLinks } from "./assets/products/footerLinks";
import StripeForm from "./components/Stripe-payment/stripe.components";
import RedirectHomeWithDelay from "./Utilities/Redirection.component";

const Checkout = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [cloudproducts, setCloudProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {
    cartItemContainer,
    totalItems,
    totalPrice,
    stripePaymentError,
    stripePaymentSuccessfull,
  } = useContext(ProductLiteralContext);

  // console.log(process.env.REACT_APP_API_URL);

  //The current location path
  const { pathname } = location;
  const locationPath = pathname.split("/");

  // The below code structure
  // RedirectHomeWithDelay - takes you back to the home page and reloads the window to clear out the cart after your payment has been confirmed
  //secondly I have the empyty basket if the cart is empty
  //Thirdly,the primary code loops over the card to render all the selected products and also the card component to checkout as well as the total price.

  if (stripePaymentSuccessfull) {
    return (
      <div>
        <RedirectHomeWithDelay />
      </div>
    );
  } else {
    return (
      <>
        <LocationMap locationPath={locationPath} />
        {cartItemContainer.length ? (
          <div className="checkOut__container">
            <div className="checkOut__container__products">
              <div className="checkout__header__container">
                <h2 className="checkout__header">{`My Bag (${totalItems})`}</h2>
              </div>
              {cartItemContainer.map((product, ind) => {
                return <CartProducts key={ind} product={product} />;
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

                <StripeForm />

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
        ) : (
          <div className="Empty-basket--container">
            <div className="cart-symbol--container">
              <CartIconSymbol />
              <h2 className="cart-symbol--header">Your bag is empty!</h2>
              <Button
                title={"Start Shopping"}
                btnclass={"btn-primary btn-checkout"}
                onClick={() => navigate("/")}
              />
            </div>
          </div>
        )}
      </>
    );
  }
};

export default Checkout;
