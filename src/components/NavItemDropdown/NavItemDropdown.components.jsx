import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  const navigate = useNavigate();
  const { isDropdownHovered, setIsDropDownHovered, search, setSearch } =
    useContext(UserContext);
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

  // Funstion to filter based on the current link clicked by the user
  const filterbasedOnLinkClicked = (brand) => {
    navigate("/SearchResultPage", { state: { from: text, filter: brand } });
  };

  //Onsubmit handler for search click
  const onsubmitSearchhandler = (e) => {
    e.preventDefault(); // Prevent page reload

    let search = e.target.textContent;
    //Set the search to the currently clicked brand
    setSearch(search);

    // Navigate to "ResultPage" with form data
    navigate("/SearchResultPage", { state: { search } });
  };

  const onclickBrandPagefilter = (e) => {
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
                      <p
                        onClick={() => filterbasedOnLinkClicked(brand)}
                        className="dropdownText"
                      >
                        {brand}
                      </p>
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
                      <Link
                        to={`${text}/${types}`}
                        className="dropdownTextLinks"
                      >
                        {types}
                      </Link>
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
                <p
                  onClick={onclickBrandPagefilter}
                  className="dropdownBrandText"
                >
                  {current}
                </p>
              ))}
            </div>
            <div>
              {brandsIncuded.length > 0 &&
                brandsIncuded.map((current) => (
                  <p onClick={onsubmitSearchhandler} className="dropdownText">
                    {current}
                  </p>
                ))}

              {brandsLetter && brandsIncuded.length < 1 ? (
                <p className="dropdownText">{`No product Starting with ${brandsLetter}`}</p>
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
