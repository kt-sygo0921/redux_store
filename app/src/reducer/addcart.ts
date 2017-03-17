import {ADDCART} from '../action';
let initialstate = {
    cartItems:[]
}

let newCartItems = [];

export function addCart_Reducer(state=initialstate,action) {
    switch(action.type) {
        case ADDCART:
        newCartItems.push(action.cartItems);
        return (<any>Object).assign({},state,{
            cartItems: newCartItems
        })

        default:
        return state
    }
}
