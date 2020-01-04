import React from "react"
import "./CardDropdown.styles.scss"
import CustomButton from "../custom-button/CustomButton"
import { connect } from "react-redux"
import CartItem from "../cart-item/CartItem"

const CardDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToprops = ({ cart: { cartItems } }) => ({
  cartItems
})

export default connect(mapStateToprops)(CardDropdown)
