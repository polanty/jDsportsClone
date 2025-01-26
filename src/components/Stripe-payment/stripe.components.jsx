import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState, useContext } from "react";
import { ProductLiteralContext } from "../../Contexts/Products.context";
import { Button } from "../Button.componets";
import "./stripe.styles.css";

const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const {
    totalPrice,
    // stripePaymentSuccessfull,
    // stripePaymentError,
    setStripePaymentError,
    setStripePaymentSuccessfull,
  } = useContext(ProductLiteralContext);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const amount = totalPrice * 100;

  //function make sure the amount returned above will always be in two decimalplaces

  //  credit card payment details
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe has not loaded
    }

    setIsProcessingPayment(true);

    // console.log(totalPrice, totalPrice * 100);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    // console.log(response);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      setStripePaymentError(true);

      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        setStripePaymentSuccessfull(true);
        alert("payment successful");
      }
    }
  };

  return (
    <>
      <form onSubmit={handlePaymentSubmit}>
        <div className="Stripe__form">
          <h2 className="Stripe__form-header">Credit card payment: </h2>
          <CardElement className="Stripe__form-payment" />

          <Button
            btnclass={"btn-primary btn-checkout"}
            title={"Checkout securely"}
            isLoading={isProcessingPayment}
            disabled={isProcessingPayment}
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default StripeForm;
