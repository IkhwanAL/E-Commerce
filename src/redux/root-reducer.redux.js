import { combineReducers } from 'redux';

import userReducer from './user/userReducer.redux';

const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer;