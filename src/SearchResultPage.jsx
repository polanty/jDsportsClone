import { getAllProductsFromCloud } from "./Utilities/cloudfile";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Spinner from "./components/Spinner/Spinner.components";

import Product from "./components/IndividualProduct/Product.components";
import { UserContext } from "./Contexts/Cart.context";
import { ProductLiteralContext } from "./Contexts/Products.context";
import LocationMap from "./components/Location-Map/LocationMap.components";
import RecentlyViewedContainer from "./components/Recenetly-Viewed/Recently-Viewed.components";
import { Button } from "./components/Button.componets";

// import "../All-Products/AllProduct.scss";

const SearchResultPage = () => {
  const location = useLocation();
  const { search } = location.state || {}; // Get data safely
  const previousPath = location.state?.from || null;
  const filterArg = location.state?.filter || null;
  const { pathname } = location;
  const [cloudproducts, setCloudProducts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  // console.log(filterArg);

  //The current location path
  const locationPath = pathname.split("/");

  const navigate = useNavigate();

  //recently viewed container context
  const { cartToggle, setCartToggle } = useContext(UserContext);
  const { recentlViewedContainer } = useContext(ProductLiteralContext);

  useEffect(() => {
    // fetching products from the cloud \
    setCartToggle(false);
    const fetchProductsFromCloud = async () => {
      try {
        const pulledProducts = await getAllProductsFromCloud();

        setIsloading(false);
        setCloudProducts(pulledProducts[0].products);
      } catch (error) {
        setIsloading(false);
        setError(error);
      }
    };

    fetchProductsFromCloud();
  }, []);

  if (!Array.isArray(cloudproducts)) {
    console.error("cloudproducts is not an array", cloudproducts);
    return [];
  }

  const safeSearch = String(search || "").toLowerCase();

  let products;

  // console.log(typeof previousPath);

  if (previousPath) {
    products = cloudproducts
      .filter(
        (product) =>
          product.category?.toLowerCase() === previousPath?.toLowerCase()
      )
      .filter((product) => {
        return product.brand?.toLowerCase() === filterArg?.toLowerCase();
      });
  } else {
    products = cloudproducts.filter((product) => {
      return (
        product.brand?.toLowerCase().includes(safeSearch) ||
        product.name?.toLowerCase().includes(safeSearch) ||
        product.type?.toLowerCase().includes(safeSearch)
      );
    });
  }

  console.log(products);

  return (
    <>
      <LocationMap locationPath={locationPath}></LocationMap>
      {products?.length > 1 ? (
        <div className="shopper-banner">
          <h1>
            {" "}
            {`Shop  ${
              safeSearch ? safeSearch : `${previousPath} ${filterArg}`
            }`}{" "}
          </h1>
          <span className="shopper-banner__logo">
            ONLY AT <span className="shopper-banner__logo-inner"></span>
          </span>
        </div>
      ) : (
        ""
      )}
      <div
        className={
          isLoading || (products && products.length < 1)
            ? "productview-spinner-container"
            : "productview-container"
        }
      >
        {isLoading ? (
          <Spinner />
        ) : (
          products &&
          products.map((product, ind) => {
            return (
              <Product
                product={product}
                key={ind}
                classNAME={`Individual-product`}
              />
            );
          })
        )}

        {products?.length < 1 && (
          <div className="productview-spinner-container">
            <h1>NO PRODUCTS IN THIS CATEGORY</h1>
            <Button
              title={"Continue Shopping"}
              btnclass={"btn-primary btn-checkout"}
              onClick={() => navigate("/")}
            />
          </div>
        )}

        {error && (
          <div className="productview-spinner-container">
            <h1>{error.message}</h1>
          </div>
        )}
      </div>

      <RecentlyViewedContainer
        recentlViewedContainer={recentlViewedContainer}
      />
    </>
  );
};

// export default products;
export default SearchResultPage;
