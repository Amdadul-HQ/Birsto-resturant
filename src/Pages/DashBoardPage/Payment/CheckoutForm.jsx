import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();
  const [error,setError] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure()
  const [cart,refetch] = useCart()
  const [transactionId ,setTransctionId] = useState('')
  const {user} = useAuth()
  const price = cart.reduce((sum,item)=> sum + item.price,0)
  useEffect(()=> {
    axiosSecure.post('/create-payment-intent',{price:price})
    .then(res => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret)
    })
  },[axiosSecure, price])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message)
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError('')
    }
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:card,
        billing_details:{
          email:user?.email,
          name:user?.displayName
        }
      }
    })
    if(confirmError){
      console.log(confirmError);
    }
    else{
      console.log(paymentIntent);
      if(paymentIntent.status == 'succeeded'){
        setTransctionId(paymentIntent.id)
        toast.success('Payment Successful')
        const paymentHistory = {
          email:user?.email,
          name:user?.displayName,
          date: new Date(),
          cartId :cart.map(item => item._id),
          menuItemId:cart.map(item => item.menuId),
          status:'Pending',
          transactionId :paymentIntent.id,
          totalPrice:price
        }
        const res = await axiosSecure.post('/payments',paymentHistory)
        console.log(res.data);
      }
    }
    navigate('/dashboard/paymenthistory')
  };
  return (
    <section className="mx-auto">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <p className="text-red-600 font-medium">{error}</p>

        <button className="paymentBtn" disabled={!stripe || !clientSecret} type="submit" >
          Pay
        </button>
      </form>
    </section>
  );
};

export default CheckoutForm;
