import {createAction} from 'redux-actions';

export const ADDCART = 'ADDCART';
export const REQUEST_USER = 'REQUEST_USER';
export const SUCCESS = 'SUCCESS';

export function addCart(cartItems) {
    console.log(cartItems);
    return {
        type:ADDCART,
        cartItems:cartItems
    }
}

export function request_user(data) {
    console.log('REQUEST_USER')
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
