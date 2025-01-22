import { CardElement } from "@stripe/react-stripe-js";
import { Button } from "../Button.componets";

const StripeForm = () => {
  return (
    <div>
      <CardElement />

      <Button title={"pay now"} />
    </div>
  );
};

export default StripeForm;
