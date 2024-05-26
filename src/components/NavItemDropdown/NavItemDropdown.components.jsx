import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/Cart.context";
import "../../components/NavItemDropdown/NavItemDropdown.css";

export const NavItemDropdown = ({
  isDropdown,
  text,
  testActive,
  dropDownHoverHandler,
  dropDownOutHandler,
  ...others
}) => {
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
        className={`dropdown-container ${testActive}`} // ${isDropdownHovered ? "active" : " "}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="Dropdown_list_link">{text} </h1>
      </div>
    </>
  );
};
