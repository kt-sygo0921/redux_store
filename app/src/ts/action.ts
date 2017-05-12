import {createAction} from 'redux-actions';

export const ADDCART = 'ADDCART';
export const REMOVECART = 'REMOVECART'
export const REQUEST_USER = 'REQUEST_USER';
export const SUCCESS = 'SUCCESS';

export function addCart(cartItems) {
    return {
        type:ADDCART,
        cartItems:cartItems
    }
}

export function removeCart(removeItems) {
    return {
        type:REMOVECART,
        removeItems:removeItems
    }
}

export function request_user(data) {
    return {
        type:REQUEST_USER,
        data
    }
}

export function success_event() {
    return{
        type:SUCCESS
    }
}


//export const sucess_event = createAction(SUCCESS);
