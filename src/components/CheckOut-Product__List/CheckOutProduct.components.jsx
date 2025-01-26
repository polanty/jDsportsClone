import { useContext } from "react";
import { ProductLiteralContext } from "../../Contexts/Products.context";
import "./CheckOutProduct.styles.css";
import { Button } from "../Button.componets";

const CartProducts = ({
  key,
  product,
  smallClass = "",
  DescriptionsmallClass = "",
  smallClassButton = "",
}) => {
  const {
    cartItemContainer,
    addToCart: addProductToCart,
    setCartItemContainer,
    removeItemsFromCart,
    removeSingleItem,
  } = useContext(ProductLiteralContext);

  return (
    <div key={key} className={`checkout__products ${smallClass}`}>
      <div className="checkout__products-imageContainer">
        <img
          src={product.image.full}
          alt={product.name}
          className="checkout__products-image"
        />
        <Button
          onClick={() => setCartItemContainer(removeItemsFromCart(product.id))}
          title={"Remove"}
          btnclass={"CheckOut__remove-products"}
        >
          Remove
        </Button>
      </div>
      <div className={`checkout__products-Desciption ${DescriptionsmallClass}`}>
        <h2>{product.name}</h2>
        <h2>{`$${product.price}`}</h2>
        <h2>Code {product.id}</h2>
      </div>
      <div className="checkout__products-buttons">
        <div className="checkOut__container__buttons">
          <Button
            onClick={() =>
              setCartItemContainer(
                addProductToCart(cartItemContainer, product.id)
              )
            }
            title={"+"}
            btnclass={`CheckOut__Adding-products ${smallClassButton}`}
          />

          <h3>{product.productCount}</h3>
          <Button
            onClick={() => setCartItemContainer(removeSingleItem(product.id))}
            title={"-"}
            btnclass={`CheckOut__Subtracting-products ${smallClassButton}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
