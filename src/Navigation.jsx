import { Outlet, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
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

export const Navigation = () => {
  // Function to handle mouse leave event

  //beginning of context
  const { cartToggle, setCartToggle, search, setSearch, pastSearch } =
    useContext(UserContext);

  const { products } = category;

  const productLink = products.map((cat) => cat.category.toLowerCase());
  const productLinkSet = new Set(productLink);
  const productLinkArr = [...productLinkSet];

  console.log(productLinkSet);

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
          {productLinkArr.map((link, ind) => (
            <LinkList link={link} ind={ind} />
          ))}
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

/* <li
                key={ind}
                className={`nav__link`} //${ isHovered ? " nav__link-pointer" : ""}
                onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
              >
                <NavLink className="nav-item" to={link}>
                  {link[0].toUpperCase() + link.slice(1)}
                </NavLink>
                <div className={`nav__link-pointer `}></div>
              </li> */
