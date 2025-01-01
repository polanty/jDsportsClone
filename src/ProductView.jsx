import { getAllProductsFromCloud } from "./Utilities/cloudfile";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductLiteralContext } from "./Contexts/Products.context";
import { UserContext } from "./Contexts/Cart.context";
//import category from "./assets/products/categories";
import LocationMap from "./components/Location-Map/LocationMap.components";
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

  useEffect(() => {
    // fetching products from the cloud \

    //console.log("Effect trigerred");

    const fetchProductsFromCloud = async () => {
      try {
        const pulledProducts = await getAllProductsFromCloud();

        setIsloading(false);
        setCloudProducts(pulledProducts[0]?.products || []);
      } catch (error) {
        setError(error);
      }
    };

    fetchProductsFromCloud();
  }, [param]);

  useEffect(() => {
    setCartToggle(cartToggle);
  });

  //console.log(cloudproducts);

  // Getting all products from the category
  const products = cloudproducts; //Actual products from the firebase clouds

  const addToCart = () => {
    setCartItemContainer(addProductToCart(param));
  };

  const removeItem = () => {
    // setCartItemContainer(removeItemsFromCart(param));
    setCartItemContainer(removeSingleItem(param));
  };

  if (!param) {
    return (
      <>
        <h1>NO PRODUCT LISTED</h1>
      </>
    );
  }

  const found = products && products.find((ele) => ele.id === param);
  // console.log(found);

  if (!found) {
    return <p>Product not found</p>;
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
              className="Product-Div__image"
            />
          </div>

          <h1>{totalItems}</h1>
          <h1>{totalPrice}</h1>
        </div>

        <div className="description-container">
          <Button
            btnclass={"btn-primary"}
            title={"Add to Cart"}
            onClick={addToCart}
          />
          <Button
            btnclass={"btn-primary btn-test"}
            title={"Delete"}
            onClick={removeItem}
          />
        </div>
      </div>
    </>
  );
};

export default ProductView;
