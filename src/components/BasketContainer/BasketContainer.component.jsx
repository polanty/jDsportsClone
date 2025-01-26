import "./Basket.styles.css";
import { useContext } from "react";
import { ProductLiteralContext } from "../../Contexts/Products.context";
import CartProducts from "../CheckOut-Product__List/CheckOutProduct.components";

const BasketContainer = ({ isActive = "" }) => {
  const { cartItemContainer } = useContext(ProductLiteralContext);

  return (
    <div className="Basket__Container">
      {cartItemContainer.map((product, ind) => {
        return (
          <CartProducts
            key={ind}
            product={product}
            smallClass={"small-product__listing"}
            smallClassButton={"smallClassButton"}
            DescriptionsmallClass={"DescriptionsmallClass"}
          />
        );
      })}

      <div className="Total-balance--container"></div>
    </div>
  );
};

export default BasketContainer;
