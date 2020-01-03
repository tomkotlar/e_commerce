import React from "react"
import { ReactComponent as ShoppingIcon } from "../../graphic_assets/shopping-bag.svg"
import "./CardIcon.styles.scss"
const CardIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CardIcon
