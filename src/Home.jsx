import Products from "./Products";
import { Card } from "./components/card.components";
// import Courasel from "./components/Courasel/Cousarel.components";
import { AllProductImages } from "./assets/AllImages/AllImagesObject/AllImagesObject";
import CouraselContainer from "./components/Courael-container/CouraselContainer.components";
import Brands from "./sections/Brands/Brands.section";
import TopPicks from "./sections/Top-Picks/TopPicks.section";
import BigImageLink from "./sections/BigImagesLink/BigImagesLink";
import Blogs from "./sections/Blogs/Blogs";
// import Checkout from "./Checkout";

const Home = () => {
  const { home } = AllProductImages;

  const { CouraselImagesLink } = home;

  return (
    <>
      <CouraselContainer couraelElements={CouraselImagesLink} />
      <Brands />
      <Card products={Products} />
      <TopPicks />
      <BigImageLink />
      <Blogs />
    </>
  );
};

export default Home;
