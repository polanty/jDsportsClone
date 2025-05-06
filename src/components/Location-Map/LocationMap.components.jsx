import "../../components/Location-Map/LocationMap.css";
import { Link } from "react-router-dom";

const LocationMap = ({ locationPath }) => {
  return (
    <div className="AllProduct__location-details">
      <div className="AllProduct__location-innerContainer">
        <Link className="AllProduct__location-innerLink" to={"/"}>
          Home{" "}
        </Link>
        {locationPath.map(
          (link, ind) =>
            link.length > 0 && (
              <p key={ind} className="AllProduct__location-innerLink">
                <span className="AllProduct__location-pointer">
                  <svg
                    width="7"
                    height="7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="8,5 19,12 8,19" />
                  </svg>
                </span>

                {link}
              </p>
            )
        )}
      </div>
    </div>
  );
};

// &#11166; ;
export default LocationMap;
