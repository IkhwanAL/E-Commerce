import React from 'react'
import CartActionTrigger from '../../redux/cart/cart.action.redux';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';

import './cart-icon.styles.scss'

const CartIcon = ({cartToggleHidden}) => {
    return (
        <div className="cart-icon" onClick={cartToggleHidden}>
            <ShoppingBag className="shopping-icon"/>
            <span className="item-count"> 0 </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    cartToggleHidden: () => dispatch(CartActionTrigger())
})


export default connect(null, mapDispatchToProps)(CartIcon);