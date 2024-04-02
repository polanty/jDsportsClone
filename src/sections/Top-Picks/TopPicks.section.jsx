// import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import category from "../../assets/products/categories";
import { Button } from "../../components/Button.componets";
import "../../sections/Top-Picks/TopPicks.section.css";
import Product from "../../components/IndividualProduct/Product.components";

const TopPicks = () => {
  const { products } = category;
  const [TopPicksCategory, setTopPicksCategory] = useState("men");
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive("men");
  }, []);

  const handleActive = (name) => {
    setActive(name);
  };

  const OnClickHandler = (e) => {
    const category = e.target.name;
    handleActive(category);
    setTopPicksCategory(category);
  };

  return (
    <div className="brands__container">
      <div className="product__header-container">
        <h1 className="LogoList-title">Top picks</h1>
        <Button
          onClick={OnClickHandler}
          name="men"
          btnclass={`TopPick__Btn ${active === "men" ? "active" : " "} `}
          title={"Shop Men's"}
        >
          Men
        </Button>
        <Button
          onClick={OnClickHandler}
          name="women"
          btnclass={`TopPick__Btn ${active === "women" ? "active" : " "} `}
          title={"Shop Women's"}
        >
          Men
        </Button>
        <Button
          onClick={OnClickHandler}
          name="kids"
          btnclass={`TopPick__Btn ${active === "kids" ? "active" : " "} `}
          title={"Shop Kid's"}
        >
          Kids
        </Button>
      </div>
      <div className="product__container">
        {products
          .filter((ele) => ele.category === TopPicksCategory)
          .filter((_, ind) => ind < 4)
          .map((product, ind) => (
            <div key={ind} className="TopPicksCategory__container">
              <Product product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopPicks;
