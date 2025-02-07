import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/Cart.context";
import { AllProductImages } from "../../assets/AllImages/AllImagesObject/AllImagesObject";
import { ProductLiteralContext } from "../../Contexts/Products.context";
import { navdropDownFilter } from "../../Utilities/helperFunctions";
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
  const { cloudProduct, loading, error } = useContext(ProductLiteralContext);
  const [brandsIncuded, setBrandIncluded] = useState([]);
  const [brandsLetter, setBrandLetter] = useState(null);

  let featuredImage;

  if (text !== "brands") {
    featuredImage = AllProductImages[text].CouraselImagesLink;
  }

  const combinedpro = navdropDownFilter(cloudProduct, text);

  const { uniqueBrands, uniqueTypes } = combinedpro;

  const brandAlpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  //Function to handle mouse enter event
  const handleMouseOver = () => {
    setIsDropDownHovered(true);
  };

  const handleMouseLeave = () => {
    setIsDropDownHovered(false);
  };

  const onclickfilter = (e) => {
    let letter = e.target.textContent.trim(); // Ensure no extra spaces

    setBrandLetter(letter);

    let filteredArray = combinedpro.filter((brand) => {
      // Ensure brand is a string before accessing index 0
      return (
        typeof brand === "string" &&
        brand[0]?.toLowerCase() === letter.toLowerCase()
      );
    });

    setBrandIncluded(filteredArray);
  };

  return (
    <>
      <div
        className={`dropdown-container ${testActive}`} // ${isDropdownHovered ? "active" : " "}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {/* <h1 className="Dropdown_list_link">{text} </h1> */}
        {text !== "brands" ? (
          <div className="dropdownTextOuterContainer">
            <div className="dropdownTextInnerContainer">
              {" "}
              <div className="dropdownTextContainer1">
                <div className="dropdownTextHeader">
                  <h2>Brands</h2>
                </div>
                {uniqueBrands.map((brand) => (
                  <>
                    <div>
                      {" "}
                      <p className="dropdownText">{brand}</p>
                    </div>
                  </>
                ))}
              </div>
              <div className="dropdownTextContainer2">
                <div className="dropdownTextHeader">
                  <h2>Products</h2>
                </div>
                {uniqueTypes.map((types) => (
                  <>
                    <div>
                      {" "}
                      <p className="dropdownText">{types}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>

            {featuredImage && (
              <div className="dropdownImage-container">
                <div className="dropdownTextHeader">
                  <h2>Featured</h2>
                </div>
                <img
                  src={featuredImage[0]}
                  alt="Featured"
                  className="card-image--banner"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="brandMainContainer">
            <div className="dropdownTextHeader">
              <h2>Shop by Brand</h2>
            </div>
            <div className="brandLettersContainer">
              {brandAlpha.map((current) => (
                <p onClick={onclickfilter} className="dropdownBrandText">
                  {current}
                </p>
              ))}
            </div>
            <div>
              {brandsIncuded.length > 0 &&
                brandsIncuded.map((current) => (
                  <p className="dropdownBrandText">{current}</p>
                ))}

              {brandsLetter && brandsIncuded.length < 1 ? (
                <p className="dropdownBrandText">{`No product Starting with ${brandsLetter}`}</p>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
