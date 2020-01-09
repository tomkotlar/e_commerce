import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = "pk_test_90gLkMBjxymz7M854m21h6FJ00BeoTCPzz"

  const onToken = token => {
    console.log(token)
    alert("Payment Successful")
  }
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="E_Commerce"
        shippingAddress
        billingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  )
}

export default StripeButton
