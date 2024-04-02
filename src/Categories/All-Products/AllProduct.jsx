import { useParams } from "react-router-dom";

const AllProducts = () => {
  const { allproducts } = useParams();
  return (
    <>
      <div>Are presentation of all the products</div>
      <p>This is the link {allproducts}</p>
    </>
  );
};

export default AllProducts;
