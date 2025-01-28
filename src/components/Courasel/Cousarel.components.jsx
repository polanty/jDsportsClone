import "../../components/Courasel/Courasel.css";
import { useNavigate } from "react-router-dom";
// import TopBannerSample from "../../../src/assets/courasel/TopBanner.gif";
import { Button } from "../Button.componets";

const Courasel = ({ title, ind, TopBanner = "", link, ...others }) => {
  const navigate = useNavigate();

  const handleClickEvent = () => navigate(`${link}`);

  return (
    <>
      <div className={`courasel-container`} {...others}>
        <img src={TopBanner} alt="Banner" className="courasel-image" />
        <Button
          title={"Shop Now"}
          btnclass={"btn-primary"}
          onClick={handleClickEvent}
        />
      </div>
    </>
  );
};

// className="courasel-image"

export default Courasel;
