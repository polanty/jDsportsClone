import "../../components/Recenetly-Viewed/Recently-Viewed.css";
import Product from "../IndividualProduct/Product.components";

const RecentlyViewedContainer = ({ recentlViewedContainer }) => {
  return (
    <div className="ProductView__recentlyViewed">
      <div className="ProductView__recentlyViewed-innerContainer">
        <h3 className="footer-link__header">Recently Viewed</h3>
        <div className="recently__viewed-item-container">
          {recentlViewedContainer
            .filter((_, ind) => ind < 5)
            .map((product, ind) => (
              <Product product={product} key={ind} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewedContainer;
