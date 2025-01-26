import { getAllProductsFromCloud } from "./Utilities/cloudfile";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductLiteralContext } from "./Contexts/Products.context";
import { UserContext } from "./Contexts/Cart.context";
//import category from "./assets/products/categories";
import LocationMap from "./components/Location-Map/LocationMap.components";
import RecentlyViewedContainer from "./components/Recenetly-Viewed/Recently-Viewed.components";
import Spinner from "./components/Spinner/Spinner.components";
import { Button } from "./components/Button.componets";

const ProductView = () => {
  //const { products } = category; // Test product from category within the local files
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const param = params.get("product");

  const { cartToggle, setCartToggle } = useContext(UserContext);
  const [cloudproducts, setCloudProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  const {
    recentlViewedContainer,

    addToCart: addProductToCart,
    setCartItemContainer,
  } = useContext(ProductLiteralContext);

  // style for spinner
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
  };

  //The current location path
  const { pathname } = location;
  const locationPath = pathname.split("/");

  useEffect(() => {
    // fetching products from the cloud \

    //console.log("Effect trigerred");

    const fetchProductsFromCloud = async () => {
      try {
        const pulledProducts = await getAllProductsFromCloud();

        setIsloading(false);

        // setCartItemContainer(pulledProducts[0]?.products || []);
        setCloudProducts(pulledProducts[0]?.products || []);
      } catch (error) {
        setError(error);
      }
    };

    fetchProductsFromCloud();
  }, [param]);

  //setCartItemContainer

  useEffect(() => {
    setCartToggle(cartToggle);
  });

  //console.log(cloudproducts);

  // Getting all products from the category
  const products = cloudproducts; //Actual products from the firebase clouds

  const addToCart = () => {
    setCartItemContainer(addProductToCart(products, param));
  };

  if (!param) {
    return <h1 style={containerStyle}>Product not found</h1>;
  }

  const found = products && products.find((ele) => ele.id === param);

  if (!found) {
    return (
      <div style={containerStyle}>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <LocationMap locationPath={locationPath} />
      <div className="product__view-header"></div>
      <div className="Product__view-page">
        {/* <h1>This is the product page that each product navigates too</h1> */}

        <div className="ProductView-Image__Container">
          <div className="Product-Div__image-Container">
            <img
              src={found.image.full}
              alt={found.name}
              className="ProductView-Div__image"
            />
          </div>

          {/* <h1>{totalItems}</h1>
          <h1>{totalPrice}</h1> */}
        </div>

        <div className="description-container">
          <h1 className="Product-View__title">{found.name}</h1>
          <h3 className="Product-View__price">{`$${found.price}`}</h3>
          <Button
            btnclass={"btn-primary__addToCart"}
            title={"Add to Cart"}
            onClick={addToCart}
          />
        </div>
      </div>

      {/* Recently viewed container  */}

      <RecentlyViewedContainer
        recentlViewedContainer={recentlViewedContainer}
      />
    </>
  );
};

export default ProductView;
