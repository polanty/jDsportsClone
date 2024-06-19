import { Outlet, NavLink } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import category from "./assets/products/categories.js";
// import { useState, useEffect } from "react";
// import ButtonTestcomp from "./assets/ButtonComptest.jsx";
import LinkList from "./components/List-item/ListLink.components.jsx";
import JdLogoDark from "./components/JdSportLogo/LogoDark.components.jsx";
import FormInput from "./components/Form-input/Form-input.components.jsx";
import IconSpan from "./components/IconSpan/IconSpan.components.jsx";
import OverLay from "./components/Home-Overlay/HomeOverlay.components.jsx";
import Footer from "./Footer.jsx";

//context imported for the cart drop down
import { UserContext } from "./Contexts/Cart.context.jsx";
import { productLinkUseRefFunction } from "./Utilities/helperFunctions.js";

export const Navigation = () => {
  // Function to handle mouse leave event

  //beginning of context
  const { cartToggle, setCartToggle, search, setSearch, pastSearch } =
    useContext(UserContext);

  // products called from the category object
  const { products } = category;

  //React useRef to store the unique categories available
  //improve app runtime as storing array in useRef prevents re-render
  const productLinkArr = productLinkUseRefFunction(products, useRef);

  const onFormchangeHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const cartToogleHandler = () => {
    setCartToggle(!cartToggle);
  };

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
          <form
            onSubmit={() => {
              // console.log(FormValues);
            }}
            className="search-form"
          >
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
          <IconSpan className={"IconSpan-button-favorite"} />
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
