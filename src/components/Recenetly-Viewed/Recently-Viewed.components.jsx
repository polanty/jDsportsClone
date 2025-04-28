// import "../../components/Recenetly-Viewed/Recently-Viewed.css";
import "../Recenetly-Viewed/Recentlyview2.css";
import Product from "../IndividualProduct/Product.components";

const RecentlyViewedContainer = ({ recentlViewedContainer }) => {
  return (
    <div className="brands__container">
      <div className="ProductView__recentlyViewed-innerContainer">
        <h3 className="footer-link__header">Recently Viewed</h3>
        <div className="product__container">
          {recentlViewedContainer
            .filter((_, ind) => ind < 4)
            .map((product, ind) => (
              <div key={ind} className="TopPicksCategory__container">
                <Product product={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewedContainer;
