import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { connect } from 'react-redux';
import { selectCartItem } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'
import { CartActionTrigger } from "../../redux/cart/cart.action.redux";

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => {
    console.log(dispatch);
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>)) :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('checkout');
                dispatch(CartActionTrigger());
            }}
            > Checkout </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
})


export default withRouter(
    connect(mapStateToProps)(CartDropdown)
);