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
                &#11166; {link}
              </p>
            )
        )}
      </div>
    </div>
  );
};

export default LocationMap;
