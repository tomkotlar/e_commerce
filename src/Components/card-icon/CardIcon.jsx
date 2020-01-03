import React from "react"
import { ReactComponent as ShoppingIcon } from "../../graphic_assets/shopping-bag.svg"
import "./CardIcon.styles.scss"
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { connect } from "react-redux";



const CardIcon = ({toggleCartHidden}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden} >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CardIcon)
