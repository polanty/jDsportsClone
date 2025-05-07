import "../../components/Home-Overlay/HomeOverlay.css";
import { uniqueStringValues } from "../../Utilities/helperFunctions";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/Cart.context";
import { ProductLiteralContext } from "../../Contexts/Products.context";
import Product from "../IndividualProduct/Product.components";

// const OverlayClases = {
//     "Overlayactive" : "Overlayactive",
//     "OverLay": "OverLay"
// }

const OverLay = () => {
  const classOverlay = "Overlay";
  const classAnimation = "Overlayactive";
  const Overlay_inner = "Overlay_inner";
  //Form navigation to Seachpage
  const navigate = useNavigate();

  const { cartToggle, setCartToggle, pastSearch } = useContext(UserContext);
  const { recentlViewedContainer } = useContext(ProductLiteralContext);

  const pastSearchUnique = uniqueStringValues(pastSearch);

  //overlay toggle functionality
  const handleOverlay = () => {
    return setCartToggle(!cartToggle);
  };

  const onsubmitSearchhandler = (search) => {
    //Inclune this in the previously searched
    pastSearch.push(search);

    // Navigate to "ResultPage" with form data
    navigate("/SearchResultPage", { state: { search } });
  };

  return (
    <>
      <div
        className={`${classOverlay} ${cartToggle ? classAnimation : " "}`} //
        onClick={handleOverlay}
      ></div>
      <div className={`${Overlay_inner} ${cartToggle ? classAnimation : " "}`}>
        {/* <div className="Trending">
          <h3 className="Overlay__header">Trending</h3>
        </div> */}
        <div className="recent__search">
          <h3 className="Overlay__header">Recent Searches</h3>
          {pastSearchUnique
            .filter((_, ind) => ind < 15)
            .map((search, ind) => (
              <p
                className="Search_Results"
                onClick={() => onsubmitSearchhandler(search)}
                key={ind}
              >
                {search}
              </p>
            ))}
        </div>
        <div className="recently__viewed">
          <h3 className="Overlay__header">Recently Viewed</h3>
          <div className="recently__viewed-items-container">
            {recentlViewedContainer
              .filter((_, ind) => ind < 4)
              .map((product, ind) => (
                <div className="RecentlyViewed-Products_container">
                  <Product
                    product={product}
                    key={ind}
                    classNAME="recentlViewedContainer-product-view"
                  />
                </div>
              ))}
          </div>
        </div>
        <div className={`nav__inner-link-pointer`}></div>
      </div>

      {/*   */}

      {
        /* ${
          isHovered ? "nav__link-pointer-active" : ""
        } */
        //   <div className="recently__viewed">
        //   <h3 className="Overlay__header">Recently Viewed</h3>
        //   <div className="recently__viewed-item-container">
        //     {recentlViewedContainer
        //       .filter((_, ind) => ind < 4)
        //       .map((product, ind) => (
        //         <Product
        //           product={product}
        //           key={ind}
        //           classNAME={`product-view__recentlyViewed`}
        //           classNAME2="recentlViewedContainer-product-view"
        //         />
        //       ))}
        //   </div>
        // </div>
      }
    </>
  );
};

export default OverLay;
