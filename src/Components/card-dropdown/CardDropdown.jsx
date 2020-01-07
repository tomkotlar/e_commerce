import React from "react"
import "./CardDropdown.styles.scss"
import CustomButton from "../custom-button/CustomButton"
import CartItem from "../cart-item/CartItem"

import { connect } from "react-redux"
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";


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

const mapStateToprops = createStructuredSelector ({
  cartItems: selectCartItems
})

export default connect(mapStateToprops)(CardDropdown)
