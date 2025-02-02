import { NavLink } from "react-router-dom";
import { AllProductImages } from "../../assets/AllImages/AllImagesObject/AllImagesObject";
import "./RoundImageLinks.css";

const RoundImageLinks = ({ category, route }) => {
  const currentRouteMail = AllProductImages[route];

  const shopByCatImages = currentRouteMail.shopByCat;

  // console.log(route);
  return (
    <li>
      <NavLink to={category} className="generic-header-links-container">
        <span className="generic-image-holder">
          <div
            className="generic-image"
            style={{
              backgroundImage: `url(${shopByCatImages[category]})`,
            }}
          ></div>
        </span>
        <span className="generic-header-text">{`${category}`}</span>
      </NavLink>
    </li>
  );
};

export default RoundImageLinks;
