import { combineReducers } from 'redux';

import userReducer from './user/userReducer.redux';
import cartReducer from './cart/cartReducer.redux'

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
})

export default rootReducer;