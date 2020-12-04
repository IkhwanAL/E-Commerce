import React from 'react'
import Directory from '../../component/directory/directory.component'

import './HomePage.styles.scss'

const HomePage = (props) => {
    console.log(props)
    return (
        <div className="homepage">
            <Directory/>
        </div>
    )
}

export default HomePage;