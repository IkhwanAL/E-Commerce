import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer.redux'

const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));