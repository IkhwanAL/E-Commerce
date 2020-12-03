import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title, ImageUrl, size}) => {
    const style = {
        backgroundImage: `url(${ImageUrl})`,
    }
    return(
        <div className={`${size} menu-item`}>
            <div className="background" style={style}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem