import {createAction} from 'redux-actions';

export const ADDCART = 'ADDCART';
export const REQUEST_USER = 'REQUEST_USER';

export function addCart(cartItems) {
    console.log(cartItems);
    return {
        type:ADDCART,
        cartItems
    }
}

export function request_user (data) {
    console.log(data);
    return {
        type: REQUEST_USER,
        data
    }
}
//export const request_user = createAction(REQUEST_USER);
