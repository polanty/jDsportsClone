import "../../components/Courasel/Courasel.css";
import { Button } from "../Button.componets";

const Courasel = ({ title, ind, ...others }) => {
  return (
    <>
      <div className={`courasel-container`} {...others}>
        <p className="courasel-element">{title}</p>
        <Button title={"Shop Now"} btnclass={"btn-primary"} />
      </div>
    </>
  );
};

export default Courasel;
