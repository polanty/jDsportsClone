import { NavLink } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { NavItemDropdown } from "../NavItemDropdown/NavItemDropdown.components";
import { UserContext } from "../../Contexts/Cart.context";

const LinkList = ({ ind, link, navActive }) => {
  //functionality to handle the pointer beneath the navigation links
  const [isHovered, setIsHovered] = useState(false);
  const { isDropdownHovered, setIsDropDownHovered } = useContext(UserContext);
  const [activeLink, setActiveLink] = useState("");

  let linkName;
  let currentLink;
  let testActiveLink;

  // Function to handle mouse enter event
  const handleLinkMouseOver = (e) => {
    linkName = e.target.firstChild.textContent.toLowerCase();
    currentLink = navActive.toLowerCase();

    testActiveLink =
      linkName.toLowerCase() === currentLink.toLowerCase()
        ? setActiveLink("active")
        : " ";
    setIsDropDownHovered(true);
    setIsHovered(!isHovered);
  };

  const handleLinkMouseLeave = (e) => {
    setActiveLink(" ");
    setIsHovered(false);
    setIsDropDownHovered(!isDropdownHovered);
  };

  return (
    <>
      <li
        key={ind}
        className={`nav__link`}
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
      {`${isHovered || isDropdownHovered} ` && (
        <NavItemDropdown text={navActive} testActive={activeLink} />
      )}
    </>
  );
};
//
export default LinkList;
