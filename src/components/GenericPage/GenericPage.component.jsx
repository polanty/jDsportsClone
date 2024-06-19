import "../GenericPage/GenericPage.css";
import { NavLink } from "react-router-dom";
import category from "../../assets/products/categories";
import CouraselContainer from "../Courael-container/CouraselContainer.components";
import BigImageLink from "../../sections/BigImagesLink/BigImagesLink";
import Blogs from "../../sections/Blogs/Blogs";
import { useEffect, useRef, useState } from "react";
import { uniqueProductForEachCategory } from "../../Utilities/helperFunctions";
import RoundImageLinks from "../GenericTopPageLinks/RoundImageLinks";

const GenericPage = ({ routeName }) => {
  const { products } = category;
  const referencedProducts = useRef(products);

  // State to store the filtered routeProduct
  const [routeProduct, setRouteProduct] = useState([]);

  useEffect(() => {
    const filteredProducts = referencedProducts.current.filter(
      (product) => product.category.toLowerCase() === routeName.toLowerCase()
    );

    // Update the state with the filtered products
    setRouteProduct(filteredProducts);
    console.log("routeProduct");
  }, [routeName]);

  const productCategories = uniqueProductForEachCategory(routeProduct);

  return (
    <>
      <div className="genericpage-container">
        <div className="generic-title__container">
          <span className="generic-home-link">
            <NavLink className="generic-inner-link" to="/">
              <span className="generic-text-symbol">&lt;</span>
              Home
            </NavLink>

            <h2 className="generic-title">
              {routeName[0].toUpperCase() + routeName.slice(1) + "'s"}
            </h2>
          </span>
        </div>
        <ul className="generic-categories">
          <li>
            <NavLink to={routeName} className="generic-header-links-container">
              <span className="generic-image-holder">
                <div className="generic-image"></div>
              </span>
              <span className="generic-header-text">{"Shop all"}</span>
            </NavLink>
          </li>
          {productCategories.length ? (
            productCategories.map((cat, ind) => (
              <RoundImageLinks category={cat} key={ind} />
            ))
          ) : (
            <div>
              <h1>NO PRODUCTS IN THIS CATEGORY</h1>
            </div>
          )}
        </ul>
        <CouraselContainer />

        <BigImageLink />
        <Blogs />
      </div>
    </>
  );
};

export default GenericPage;
