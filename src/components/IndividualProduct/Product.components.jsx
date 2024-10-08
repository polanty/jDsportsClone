import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductLiteralContext } from "../../Contexts/Products.context";
import { UserContext } from "../../Contexts/Cart.context";
import "../../components/IndividualProduct/Product.css";

const Product = ({ product, classNAME = "" }) => {
  const navigate = useNavigate();

  const { recentlyViewedProducts } = useContext(ProductLiteralContext);
  const { setCartToggle } = useContext(UserContext);

  // recentlViewedContainer
  //console.log(recentlViewedContainer);

  const onclickHnadler = () => {
    //set the card toggle to remove the drop down
    setCartToggle(false);

    //adds the recently viwed product to the array for viewing
    recentlyViewedProducts(product);

    return navigate(`/ProductView/?product=${product.id}`);
  };
  return (
    <>
      <div onClick={onclickHnadler} className={`Product-Div ${classNAME}`}>
        <p>{product.id}</p>
        <p>{product.type}</p>
        <p>{product.category}</p>
        <p>{product.brand}</p>
        <p>{product.name}</p>
      </div>
    </>
  );
};

export default Product;
