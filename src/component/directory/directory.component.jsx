import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

import dataSections from './directory-src';

class Directory extends Component{
    constructor(){
        super();

        this.state = {
            sections: dataSections
        }
    }
    renderdata(){
        let newArr = this.state.sections.map(({title, id, size, imageUrl}) => {
            return (
                <MenuItem key={id} title={title} ImageUrl={imageUrl} size={size} />
            )
        })
        return newArr;
    }
    render(){
        return(
            <div className="directory-menu">
                {this.renderdata()}
            </div>
        )
    }
}

export default Directory;