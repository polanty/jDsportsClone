import { NavLink } from "react-router-dom";
import "./RoundImageLinks.css";

const RoundImageLinks = ({ category, route }) => {
  console.log(route);
  return (
    <li>
      <NavLink to={category} className="generic-header-links-container">
        <span className="generic-image-holder">
          <div className="generic-image"></div>
        </span>
        <span className="generic-header-text">{`${category}`}</span>
      </NavLink>
    </li>
  );
};

export default RoundImageLinks;
