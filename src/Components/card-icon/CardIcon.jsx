import React from "react"
import { ReactComponent as ShoppingIcon } from "../../graphic_assets/shopping-bag.svg"
import "./CardIcon.styles.scss"
import { toggleCartHidden } from "../../redux/cart/cart.action"
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"


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
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon)
