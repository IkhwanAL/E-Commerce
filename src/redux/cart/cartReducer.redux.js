import CartTypes from './cart.types.redux'
import { addQuantityItem } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.SET_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addQuantityItem(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;