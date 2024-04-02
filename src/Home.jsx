import Products from "./Products";
import { Card } from "./components/card.components";
// import Courasel from "./components/Courasel/Cousarel.components";
import CouraselContainer from "./components/Courael-container/CouraselContainer.components";
import Brands from "./sections/Brands/Brands.section";
import TopPicks from "./sections/Top-Picks/TopPicks.section";

const Home = () => {
  return (
    <>
      <CouraselContainer />
      <Brands />
      <Card products={Products} />
      <TopPicks />
    </>
  );
};

export default Home;
