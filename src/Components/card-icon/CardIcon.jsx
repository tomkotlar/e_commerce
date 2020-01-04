import React from "react"
import { ReactComponent as ShoppingIcon } from "../../graphic_assets/shopping-bag.svg"
import "./CardIcon.styles.scss"
import { toggleCartHidden } from "../../redux/cart/cart.action"
import { connect } from "react-redux"


const CardIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (acumulatedQuantity, cartItem) => 
    acumulatedQuantity + cartItem.quantity, 0
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon)
