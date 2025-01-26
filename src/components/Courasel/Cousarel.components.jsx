import "../../components/Courasel/Courasel.css";
import TopBanner from "../../../src/assets/courasel/TopBanner.gif";
import { Button } from "../Button.componets";

const Courasel = ({ title, ind, ...others }) => {
  return (
    <>
      <div className={`courasel-container`} {...others}>
        <img src={TopBanner} className="courasel-image" alt="Banner" />
        <Button title={"Shop Now"} btnclass={"btn-primary"} />
      </div>
    </>
  );
};

export default Courasel;
