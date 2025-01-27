import "./Basket.styles.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductLiteralContext } from "../../Contexts/Products.context";
import CartProducts from "../CheckOut-Product__List/CheckOutProduct.components";
import { Button } from "../Button.componets";

const BasketContainer = ({ isActive = "" }) => {
  const { cartItemContainer, totalPrice } = useContext(ProductLiteralContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="Basket__Container">
        {cartItemContainer.map((product, ind) => {
          return (
            <CartProducts
              index={ind}
              product={product}
              smallClass={"small-product__listing"}
              smallClassButton={"smallClassButton"}
              DescriptionsmallClass={"DescriptionsmallClass"}
            />
          );
        })}

        <div className="price__container-basket">
          <div className="total--price__container">
            <h3 className="basket__totale">Basket Total</h3>

            <h3 className="basket__total--price">{`${totalPrice}$`}</h3>
          </div>
          <Button
            title={"view basket"}
            btnclass={"btn-primary btn-checkout"}
            onClick={() => navigate("/Checkout")}
          />
        </div>
      </div>
    </>
  );
};

export default BasketContainer;
