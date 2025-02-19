import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState, useContext } from "react";
import { ProductLiteralContext } from "../../Contexts/Products.context";
import { Button } from "../Button.componets";
import "./stripe.styles.css";

// Inline styling for stripe payment
const getCardElementOptions = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    return {
      style: {
        base: {
          fontSize: "10px",
          color: "#333",
          "::placeholder": {
            color: "#999",
          },
        },
      },
    };
  } else {
    // Desktop styles
    return {
      style: {
        base: {
          fontSize: "14px",
          color: "#000",
          "::placeholder": {
            color: "#666",
          },
        },
      },
    };
  }
};

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

  const amount = Math.round(totalPrice * 100);

  //  credit card payment details
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe has not loaded
    }

    setIsProcessingPayment(true);

    const cardPaymentDetails = elements.getElement(CardElement);

    const cardElementValue = cardPaymentDetails._empty;

    if (cardElementValue) {
      setIsProcessingPayment(false);
      alert("Please enter your card details.");
      return;
    }

    let paymentIntentData;

    // "/.netlify/functions/create-payment-intent",
    // "/api/stripe.js"

    try {
      const response = await fetch("/api/stripe/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log(data);

      paymentIntentData = data;
    } catch (error) {
      console.error("Error creating payment intent:", error.message);
      alert(error.message);
    }

    const {
      paymentIntent: { client_secret },
    } = paymentIntentData;

    console.log(paymentIntentData);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardPaymentDetails,
        billing_details: {
          name: "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      setStripePaymentError(true);

      alert(paymentResult.error.message);
      return;
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
          <CardElement
            options={getCardElementOptions()}
            className="Stripe__form-payment"
          />

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
