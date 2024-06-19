import { useParams } from "react-router-dom";

const AllProducts = () => {
  const { allproducts } = useParams();
  return (
    <>
      <div>Are presentation of all the products</div>
      <h1>This is the link {allproducts}</h1>
    </>
  );
};

export default AllProducts;
