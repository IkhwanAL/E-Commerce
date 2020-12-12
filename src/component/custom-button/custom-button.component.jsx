import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, isSignGoogle, ...otherProps}) => (
    <button className={`${isSignGoogle ? 'google-sign-in' : '' } custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;