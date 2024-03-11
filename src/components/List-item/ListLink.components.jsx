import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { NavItemDropdown } from "../NavItemDropdown/NavItemDropdown.components";
import { UserContext } from "../../Contexts/Cart.context";

const LinkList = ({ ind, link }) => {
  //functionality to handle the pointer beneath the navigation links
  const [isHovered, setIsHovered] = useState(false);
  const { isDropdownHovered, setIsDropDownHovered } = useContext(UserContext);

  // Function to handle mouse enter event
  const handleLinkMouseOver = () => {
    setIsDropDownHovered(true);
    setIsHovered(!isHovered);
  };

  const handleLinkMouseLeave = () => {
    setIsHovered(false);
    setIsDropDownHovered(!isDropdownHovered);
  };

  // isDropdownHovered && !isHovered ? setIsHovered(true) : setIsHovered(false);

  return (
    <>
      <li
        key={ind}
        className={`nav__link`} //${ isHovered ? " nav__link-pointer" : ""}
        onMouseEnter={handleLinkMouseOver}
        onMouseLeave={handleLinkMouseLeave}
      >
        <NavLink className="nav-item" to={link}>
          {link[0].toUpperCase() + link.slice(1)}
        </NavLink>
        <div
          className={`nav__link-pointer ${
            isHovered ? "nav__link-pointer-active" : " "
          } `}
        ></div>
      </li>
      {`${isHovered || isDropdownHovered} ` && <NavItemDropdown />}
    </>
  );
};
//
export default LinkList;
