import {combineReducers} from 'redux';
import counterReducer from './counter';

const reducers = combineReducers({ // All Reducers
    counter: counterReducer
})

export default reducers;