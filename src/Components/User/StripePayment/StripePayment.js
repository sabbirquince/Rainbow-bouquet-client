import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import StripeCard from "../StripeCard/StripeCard";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IeET3LXhq8ZMBChOXWiq0B0KjLnae71BozLr2KLRU5yMyjPudhYxzfuBrsZAf95ON0eGIJSzkiGkn2blxtvvddw00q6neladr"
);

const StripePayment = ({ serviceInfo, setBooked }) => {
  return (
    <Elements stripe={stripePromise}>
      <StripeCard setBooked={setBooked} serviceInfo={serviceInfo} />
    </Elements>
  );
};

export default StripePayment;
