import CartTypes from './cart.types.redux'

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.SET_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;