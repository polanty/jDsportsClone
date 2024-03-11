import { Button } from "./Button.componets";

export const Card = ({ products }) => {
  return (
    <div className="products">
      {products.map((product, i) => {
        const { id, title, imageUrl, route } = product;
        return (
          <div className="product_class" key={id}>
            <Button
              title={`${title[0].toUpperCase() + title.slice(1)}`}
              btnclass={"btn-primary btn-secondary"}
            />
            <img src={imageUrl} alt={`${title}`} className="card-image" />
          </div>
        );
      })}
    </div>
  );
};
