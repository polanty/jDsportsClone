import { useLocation } from "react-router-dom";
import category from "./assets/products/categories";

const ProductView = () => {
  const { products } = category;
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const param = params.get("product");
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
      <h1>This is the product page that each product navigates too</h1>
      <p>{found.id}</p>
      <p>{found.type}</p>
      <p>{found.category}</p>
    </>
  );
};

export default ProductView;
