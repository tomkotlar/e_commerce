import React from "react"
import "./CheckOutItem.styles.scss"
import { clearItemFromCart } from "../../redux/cart/cart.action"
import { connect } from "react-redux"

const CheckOutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="shop-item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div 
      onClick={() => clearItem(cartItem)} 
      className="remove-button">
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem)
