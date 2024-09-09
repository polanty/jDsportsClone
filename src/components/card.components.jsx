import { Button } from "./Button.componets";
import { useNavigate } from "react-router-dom";

export const Card = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="products">
      {products.map((product, i) => {
        const { id, title, imageUrl, route } = product;

        const handleClickEvent = () => {
          return navigate(route);
        };

        return (
          <div className="product_class" key={id}>
            <Button
              title={`${title[0].toUpperCase() + title.slice(1)}`}
              btnclass={"btn-primary btn-secondary"}
              onClick={handleClickEvent}
            />
            <img src={imageUrl} alt={`${title}`} className="card-image" />
          </div>
        );
      })}
    </div>
  );
};
