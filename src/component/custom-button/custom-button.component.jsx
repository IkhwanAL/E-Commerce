import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, inverted, isSignGoogle, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : '' } ${isSignGoogle ? 'google-sign-in' : '' } custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;