import {ADDCART} from '../action';
import {combineReducers} from 'redux';
import {addCart_Reducer} from './addcart';

export let combine = combineReducers({
    addCart_Reducer
});
