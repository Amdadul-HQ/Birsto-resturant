import { loadStripe } from "@stripe/stripe-js";
import SectionHeading from "../../../Component/SectionHeading/SectionHeading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PK_KEY);

console.log(stripePromise,import.meta.env.VITE_PK_KEY);
const Payment = () => {
  
  return (
    <section>
      <div className="flex w-full justify-center mt-5 mb-6">
        <SectionHeading
          title="PAYMENT"
          subTitle="Pay Bill For Confirm"
        ></SectionHeading>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
