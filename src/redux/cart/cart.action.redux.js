import CartTypes from './cart.types.redux';

export const CartActionTrigger = () => ({
    type: CartTypes.SET_HIDDEN,
})

export const AddItemTrigger = item => ({
    type: CartTypes.ADD_ITEM,
    payload: item
});

