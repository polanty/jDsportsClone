import { useNavigate } from "react-router-dom";
import "../../components/IndividualProduct/Product.css";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const onclickHnadler = () => {
    return navigate(`/ProductView/?product=${product.id}`);
  };
  return (
    <>
      <div onClick={onclickHnadler} className="Product-Div">
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
