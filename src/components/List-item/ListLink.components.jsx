import { NavLink } from "react-router-dom";
import { useState } from "react";

const LinkList = ({ ind, link }) => {
  //functionality to handle the pointer beneath the navigation links
  const [isHovered, setIsHovered] = useState(false);
  // console.log(isHovered);

  // Function to handle mouse enter event
  const handleMouseOver = () => {
    setIsHovered(!isHovered);
  };

  const handleMouseLeave = () => {
    setIsHovered(!isHovered);
  };

  return (
    <li
      key={ind}
      className={`nav__link`} //${ isHovered ? " nav__link-pointer" : ""}
    >
      <NavLink
        className="nav-item"
        to={link}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {link[0].toUpperCase() + link.slice(1)}
      </NavLink>
      <div
        className={`nav__link-pointer ${
          isHovered ? "nav__link-pointer-active" : ""
        }`}
      ></div>
    </li>
  );
};

export default LinkList;
