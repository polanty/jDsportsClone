import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/Cart.context";
import "../../components/NavItemDropdown/NavItemDropdown.css";

export const NavItemDropdown = ({ isDropdown, ...others }) => {
  const { isDropdownHovered, setIsDropDownHovered } = useContext(UserContext);

  //Function to handle mouse enter event
  const handleMouseOver = () => {
    setIsDropDownHovered(true);
  };

  const handleMouseLeave = () => {
    setIsDropDownHovered(false);
  };
  return (
    <>
      <div
        className={`dropdown-container ${isDropdownHovered ? "active" : " "}`}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      ></div>
    </>
  );
};
