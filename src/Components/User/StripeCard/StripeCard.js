import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const StripeCard = ({ serviceInfo, setBooked }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      const cardId = paymentMethod.id;

      const bookService = { cardId, ...serviceInfo };

      fetch("https://mighty-tundra-68939.herokuapp.com/bookService", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookService),
      })
        .then((res) => res.json())
        .then((result) => {
          setBooked(result);
          setTimeout(() => {
            setBooked(false);
          }, 10000);
        });
    }
  };

  return (
    <form className="text-warning" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "lightyellow",
              "::placeholder": {
                color: "white",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-warning mt-2" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default StripeCard;
