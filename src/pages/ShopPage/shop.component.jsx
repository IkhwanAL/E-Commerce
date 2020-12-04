import React, {Component} from 'react'
import CollectionPreview from '../../component/collection-preview/collection-preview.component'

import SHOP_DATA from "./shop.src";
import './shop.styles.scss';

export default class Collecttion extends Component{
    constructor(props) {
        super(props);

        this.state = {
            collection: SHOP_DATA,
        }
    }
    renderData(){
        const {collection} = this.state;
        let newArr = collection.map(
            ({id, ...otherItem}) => <CollectionPreview key={id} {...otherItem} />
        );
        return newArr;
    }
    render() {
        return (
            <div className="shop-page">
                {this.renderData()}
            </div>
        )
    }
}