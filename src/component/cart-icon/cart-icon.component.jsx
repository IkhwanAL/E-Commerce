import React from 'react'

import { CartActionTrigger } from '../../redux/cart/cart.action.redux';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartItemCount } from '../../redux/cart/cart.selector';

import './cart-icon.styles.scss'

const CartIcon = ({cartToggleHidden, itemCount}) => {
    return (
        <div className="cart-icon" onClick={cartToggleHidden}>
            <ShoppingBag className="shopping-icon"/>
            <span className="item-count"> {itemCount} </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    cartToggleHidden: () => dispatch(CartActionTrigger())
})

const mapStateToProps = state => ({
    itemCount: selectCartItemCount(state),
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);