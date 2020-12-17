import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import {AddItemTrigger} from '../../redux/cart/cart.action.redux';
import {connect} from 'react-redux';

import "./collection-item.styles.scss";

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl} = item;
    
    const styles = {
        backgroundImage: `url(${imageUrl})`,
    }
    return(
        <div className="collection-item">
            <div style={styles} className="image"/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>
                Add to cart
            </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(AddItemTrigger(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem);