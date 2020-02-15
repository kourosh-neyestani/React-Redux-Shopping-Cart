import {combineReducers} from 'redux';
import cartReducer from './cart';

const reducers = combineReducers({ // All Reducers
    cart: cartReducer
})

export default reducers;