import "../BigImagesLink/BigImagesLink.css";
import image3 from "../../../src/assets/courasel/image3.png";
import HomePage_advert from "../../../src/assets/courasel/HomePage_advert.webp";

const BigImageLink = () => {
  return (
    <>
      <div className="BigImageLinkContainer">
        <div className="BigImageLinkContainer_advert">
          <img
            src={HomePage_advert}
            className="card-image--banner"
            alt="Banner"
          />
        </div>

        <div className="BigImagesLinkContainer_links">
          <img
            src="https://i8.amplience.net/i/jpl/jd_704612_a?qlt=92&…oimage-lrg.png%202x%22%20style=%22height:%20auto;"
            className="card-image--banner"
            alt="Banner"
          />
          {/* <h1 className="BigImageLinkContainer_link">
            The BigImageLink Container C:\Users\USER\Downloads\sandbox\jDsportsClone\src\assets\courasel\image3.png
          </h1> */}
          <img src={image3} className="card-image--banner" alt="Banner" />
        </div>
      </div>
    </>
  );
};

export default BigImageLink;
