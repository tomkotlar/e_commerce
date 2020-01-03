import React from 'react'
import './CardDropdown.styles.scss'
import CustomButton from "../custom-button/CustomButton";

const CardDropdown = () => {
    return (
        <div className='cart-dropdown'>
         <div className="cart-items"></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CardDropdown
