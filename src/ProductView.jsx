import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ProductLiteralContext } from "./Contexts/Products.context";
import category from "./assets/products/categories";
import { Button } from "./components/Button.componets";

const ProductView = () => {
  const { products } = category;
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const param = params.get("product");

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

  console.log(cartItemContainer);

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

  const found = products.find((ele) => ele.id === param);
  return (
    <>
      <div className="Product__view-page">
        <h1>This is the product page that each product navigates too</h1>
        <p>{found.id}</p>
        <p>{found.type}</p>
        <p>{found.category}</p>
        <h1>{totalItems}</h1>
        <h1>{totalPrice}</h1>

        <div className="test-container2">
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
