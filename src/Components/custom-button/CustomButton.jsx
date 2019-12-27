import React from 'react'
import './CustomButon.styles.scss'

const CustomButton = ({children, ...otherProps}) => {
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
            
       
    )
}

export default CustomButton
