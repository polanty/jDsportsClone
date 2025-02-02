import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductLiteralContext } from "../../Contexts/Products.context";
import { UserContext } from "../../Contexts/Cart.context";
import Spinner from "../Spinner/Spinner.components";
import "../../components/IndividualProduct/Product.css";

const Product = ({ product, classNAME = "", classNAME2 = "" }) => {
  const navigate = useNavigate();
  const { recentlyViewedProducts } = useContext(ProductLiteralContext);
  const { setCartToggle } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(true);

  const onclickHnadler = () => {
    setCartToggle(false);
    recentlyViewedProducts(product);
    return navigate(`/ProductView/?product=${product.id}`);
  };

  return (
    <div className={classNAME}>
      <div onClick={onclickHnadler} className={`Product-Div`}>
        {/* Wrapper for image and spinner */}
        <div className="image-container">
          {isLoading && <Spinner className="spinner" />}{" "}
          {/* Centered Spinner */}
          <img
            src={product.image.full}
            alt={product.name}
            className="Product-Div__image"
            style={{ display: isLoading ? "none" : "block" }}
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
        </div>
      </div>
      <div className="Product-Div-description">
        <p className="Product-Div-name">{product.name}</p>
        <p className="Product-Div-price">${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
