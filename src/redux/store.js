import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import Thunk from 'redux-thunk';
import rootReducer from './root-reducer';


const middlewares = [logger, Thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;