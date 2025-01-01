import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useMemo, useContext } from "react";
import Spinner from "../../components/Spinner/Spinner.components";
import { getAllProductsFromCloud } from "../../Utilities/cloudfile";
import Product from "../../components/IndividualProduct/Product.components";
import { ProductLiteralContext } from "../../Contexts/Products.context";
import LocationMap from "../../components/Location-Map/LocationMap.components";
import "../All-Products/AllProduct.scss";

const AllProducts = () => {
  // const { allproducts } = useParams();
  const { pathname } = useLocation();
  const [currentRouteProduct, setRouteProduct] = useState(null);
  const [cloudproducts, setCloudProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  // Getting the previous and current path
  const previousPath = pathname.split("/")[1].toLocaleLowerCase();
  const currentPath = pathname.split("/")[2].toLocaleLowerCase();

  //The current location path
  const locationPath = pathname.split("/");

  // UseMemo to memoize accessoriesRoutes
  const accessoriesRoutes = useMemo(() => ["men", "women", "kids"], []);

  //recently viewed container context
  const { recentlViewedContainer } = useContext(ProductLiteralContext);

  useEffect(() => {
    // fetching products from the cloud \

    const fetchProductsFromCloud = async () => {
      try {
        const pulledProducts = await getAllProductsFromCloud();

        setIsloading(false);
        setCloudProducts(pulledProducts[0].products);
      } catch (error) {
        setError(error);
      }
    };

    fetchProductsFromCloud();
  }, []);

  // Getting all products from the category
  const products = cloudproducts;

  useEffect(() => {
    if (products && products.length > 0) {
      let routeProduct = [];

      if (previousPath === currentPath) {
        // The first possibility: return all items in that category
        routeProduct = products.filter(
          (product) => product.category === currentPath
        );
      } else if (
        previousPath === "accessories" &&
        accessoriesRoutes.includes(currentPath)
      ) {
        // Second possibility: check for accessory routes and filter caps or hats
        routeProduct = products
          .filter((product) => product.category === currentPath)
          .filter(
            (product) => product.type === "caps" || product.type === "hats"
          );
      } else if (previousPath !== currentPath) {
        // Third possibility: filter by category and type
        routeProduct = products
          .filter((product) => product.category === previousPath)
          .filter((product) => product.type === currentPath);
      }

      // Set the filtered products
      setRouteProduct(routeProduct);
    }
  }, [previousPath, currentPath, cloudproducts, products, accessoriesRoutes]);

  return (
    <>
      <LocationMap locationPath={locationPath}></LocationMap>

      {/* <div className="AllProduct__location-details">
        <div className="AllProduct__location-innerContainer">
          <Link className="AllProduct__location-innerLink" to={"/"}>
            Home{" "}
          </Link>
          {locationPath.map(
            (link, ind) =>
              link.length > 0 && (
                <p key={ind} className="AllProduct__location-innerLink">
                  &#11166; {link}
                </p>
              )
          )}
        </div>
      </div> */}
      <div
        className={
          isLoading || (currentRouteProduct && currentRouteProduct.length < 1)
            ? "productview-spinner-container"
            : "productview-container"
        }
      >
        {isLoading ? (
          <Spinner />
        ) : (
          currentRouteProduct &&
          currentRouteProduct.map((product, ind) => {
            return (
              <Product
                product={product}
                key={ind}
                classNAME={`Individual-product`}
              />
            );
          })
        )}

        {currentRouteProduct && currentRouteProduct.length < 1 && (
          <div className="productview-spinner-container">
            <h1>NO PRODUCTS IN THIS CATEGORY</h1>
          </div>
        )}

        {error && (
          <div className="productview-spinner-container">
            <h1>{error.message}</h1>
          </div>
        )}
      </div>

      <div className="ProductView__recentlyViewed">
        <div className="ProductView__recentlyViewed-innerContainer">
          <h3 className="footer-link__header">Recently Viewed</h3>
          <div className="recently__viewed-item-container">
            {recentlViewedContainer
              .filter((_, ind) => ind < 5)
              .map((product, ind) => (
                <Product product={product} key={ind} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

// export default products;
export default AllProducts;
