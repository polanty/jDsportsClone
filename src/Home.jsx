import Products from "./Products";
import { Card } from "./components/card.components";
// import Courasel from "./components/Courasel/Cousarel.components";
import CouraselContainer from "./components/Courael-container/CouraselContainer.components";

const Home = () => {
  return (
    <>
      <CouraselContainer />
      <Card products={Products} />
    </>
  );
};

export default Home;
