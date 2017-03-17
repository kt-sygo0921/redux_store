import {ADDCART} from '../action';
import {combineReducers} from 'redux';
import {addCart_Reducer} from './addcart';


let combine = combineReducers({
    addCart_Reducer
});

export default combine;
