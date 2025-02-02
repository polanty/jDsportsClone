import "../GenericShopByCategory/GenericShopByCategory.style.css";
import { AllProductImages } from "../../assets/AllImages/AllImagesObject/AllImagesObject";
import { Link } from "react-router-dom";

const GenericShopByCategory = ({ routeName, productCategories }) => {
  const categoryValues = {
    hats: "Accessories",
    caps: "Accessories",
    sneakers: "Footwears",
    shirts: "Clothing",
  };

  const accesoriesCategoryValues = ["men", "women", "kids"];

  const currentRouteMail = AllProductImages[routeName];

  const shopByCatImages = currentRouteMail.shopByCat;
  // console.log(shopByCatImages);

  return (
    <>
      <div className="GenericShopByCategory-container">
        <div className="GenericCategoryTitleContainer">
          <h2 className="LogoList-title">Shop By Category</h2>

          <Link to={routeName} className="GenericCategoryTitleContainer-link">
            Shop all
          </Link>
        </div>

        <div className="Generic-Category">
          {routeName !== "accessories"
            ? productCategories.map((category, ind) => {
                return (
                  <Link className="Generic-Categories" key={ind} to={category}>
                    <img
                      src={shopByCatImages[category]}
                      alt="Categoryimage"
                      className="Generic-Categories-image"
                    />

                    <h1 className=" Generic-Categories-text ">
                      {" "}
                      {routeName !== "kids"
                        ? `${
                            routeName[0].toUpperCase() + routeName.slice(1)
                          }'s ${categoryValues[category]}`
                        : `${
                            routeName[0].toUpperCase() + routeName.slice(1)
                          }' ${categoryValues[category]}`}
                    </h1>
                  </Link>
                );
              })
            : accesoriesCategoryValues.map((category, ind) => {
                return (
                  <Link className="Generic-Categories" key={ind} to={category}>
                    <img
                      src={shopByCatImages[category]}
                      alt="Categoryimage"
                      className="Generic-Categories-image"
                    />

                    <h1 className=" Generic-Categories-text ">
                      {category !== "kids"
                        ? `${category[0].toUpperCase() + category.slice(1)}'s
                            Accessories
                          `
                        : `${category[0].toUpperCase() + category.slice(1)}'
                            Accessories
                          `}
                    </h1>
                  </Link>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default GenericShopByCategory;
