import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    cart => cart.cartItems,
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden,
)

export const selectCartItemCount = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce((accumulator, cartItem ) => accumulator + cartItem.quantity ,0 ),
);

export const selectCartTotalPrice = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0) 
);
