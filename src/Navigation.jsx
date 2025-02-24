import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import category from "./assets/products/categories.js";
import { ProductLiteralContext } from "./Contexts/Products.context.jsx";
import LinkList from "./components/List-item/ListLink.components.jsx";
import JdLogoDark from "./components/JdSportLogo/LogoDark.components.jsx";
import FormInput from "./components/Form-input/Form-input.components.jsx";
import IconSpan from "./components/IconSpan/IconSpan.components.jsx";
import OverLay from "./components/Home-Overlay/HomeOverlay.components.jsx";
import BasketContainer from "./components/BasketContainer/BasketContainer.component.jsx";
import Footer from "./Footer.jsx";

//context imported for the cart drop down
import { UserContext } from "./Contexts/Cart.context.jsx";
import { productLinkUseRefFunction } from "./Utilities/helperFunctions.js";

export const Navigation = () => {
  // Function to handle mouse leave event

  //beginning of context
  const { cartToggle, setCartToggle, search, setSearch, pastSearch } =
    useContext(UserContext);

  //Form navigation to Seachpage
  const navigate = useNavigate();

  const { totalItems, cartItemContainer } = useContext(ProductLiteralContext);
  // products called from the category object
  const { products } = category;

  //React useRef to store the unique categories available
  //improve app runtime as storing array in useRef prevents re-render
  const productLinkArr = productLinkUseRefFunction(products, useRef);

  const [onHover, setOnHover] = useState(false);

  const onFormchangeHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const onsubmitSearchhandler = (e) => {
    e.preventDefault(); // Prevent page reload

    //Inclune this in the previously searched
    pastSearch.push(search);

    // Navigate to "ResultPage" with form data
    navigate("/SearchResultPage", { state: { search } });
  };

  const cartToogleHandler = () => {
    setCartToggle(!cartToggle);
  };

  // Onhover cart item
  const handleCartHover = () => setOnHover(true);

  const handleCartLeave = () => setOnHover(false);

  return (
    <>
      <nav className="nav-container">
        <OverLay />
        <div className="logo_container">
          <NavLink to="/">
            <JdLogoDark />
          </NavLink>
        </div>

        <div className="form_container">
          <form className="search-form" onSubmit={onsubmitSearchhandler}>
            <FormInput
              containerClassType={"signUpLarge"}
              signupinput={"SignUp-input--search SignUp-input--search-active"}
              placeholder={"Search"}
              classType={"search"}
              type="text"
              name="text"
              onChange={onFormchangeHandler}
              onClick={cartToogleHandler}
            />
          </form>
          <IconSpan className={"IconSpan-button-account"} />
          <IconSpan className={"IconSpan-button-basket"} />
          <span
            onMouseEnter={handleCartHover}
            onMouseLeave={handleCartLeave}
            className="basket__special--container"
          >
            <IconSpan className={"IconSpan-button-favorite"} />
            {cartItemContainer.length ? (
              <span className="totalCartItems">{totalItems}</span>
            ) : (
              ""
            )}

            {onHover && (
              <BasketContainer
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  background: "white",
                  border: "1px solid #ddd",
                  padding: "10px",
                  zIndex: 1000,
                }}
              ></BasketContainer>
            )}
          </span>
        </div>
      </nav>
      <nav className="nav__links">
        <ul className="navLinks__container">
          {productLinkArr &&
            productLinkArr.map((link, ind) => (
              <LinkList link={link} key={ind} ind={ind} navActive={link} />
            ))}
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};
