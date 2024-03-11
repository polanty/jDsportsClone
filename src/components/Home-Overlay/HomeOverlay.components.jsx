import "../../components/Home-Overlay/HomeOverlay.css";
import { useContext } from "react";
import { UserContext } from "../../Contexts/Cart.context";

// const OverlayClases = {
//     "Overlayactive" : "Overlayactive",
//     "OverLay": "OverLay"
// }

const OverLay = () => {
  const classOverlay = "Overlay";
  const classAnimation = "Overlayactive";
  const Overlay_inner = "Overlay_inner";

  const { cartToggle, setCartToggle, search } = useContext(UserContext);

  //overlay toggle functionality
  const handleOverlay = () => {
    return setCartToggle(!cartToggle);
  };

  //recent search funtionality

  return (
    <>
      <div
        className={`${classOverlay} ${cartToggle ? classAnimation : " "}`} //
        onClick={handleOverlay}
      ></div>
      <div className={`${Overlay_inner} ${cartToggle ? classAnimation : " "}`}>
        <div className="Trending">
          <h3 className="Overlay__header">Trending</h3>
        </div>
        <div className="recent__search">
          <h3 className="Overlay__header">Recent Searches</h3>
          <p className="recent__search-text">{search}</p>
        </div>
        <div className="recently__viewed">
          <h3 className="Overlay__header">Recently Viewed</h3>
        </div>
        <div className={`nav__inner-link-pointer`}></div>
      </div>

      {/* ${
          isHovered ? "nav__link-pointer-active" : ""
        } */}
    </>
  );
};

export default OverLay;
