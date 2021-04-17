import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCard from "../StripeCard/StripeCard";

const stripePromise = loadStripe(
  "pk_test_51IeET3LXhq8ZMBChOXWiq0B0KjLnae71BozLr2KLRU5yMyjPudhYxzfuBrsZAf95ON0eGIJSzkiGkn2blxtvvddw00q6neladr"
);

const StripePayment = ({ serviceInfo, setBooked, setSpinner }) => {
  return (
    <Elements stripe={stripePromise}>
      <StripeCard
        setBooked={setBooked}
        setSpinner={setSpinner}
        serviceInfo={serviceInfo}
      />
    </Elements>
  );
};

export default StripePayment;
