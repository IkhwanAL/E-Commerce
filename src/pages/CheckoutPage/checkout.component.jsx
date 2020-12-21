import React from 'react';
import CheckoutItem from '../../component/checkout-item/checkout-item.component';

import { connect } from 'react-redux';
import { selectCartItem, selectCartTotalPrice } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect'

import './checkout.styles.scss';

const checkoutPage = ({cartItems, total}) => {
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => (<CheckoutItem ket={item.id} cartItem={item}/>)) // This Is CheckoutItem
            }
            <div className="total">
                <span>Total: ${total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotalPrice
})

export default connect(mapStateToProps)(checkoutPage);