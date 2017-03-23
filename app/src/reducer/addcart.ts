import {ADDCART} from '../action';
let initialstate = {
    cartItems:[]
}

let newCartitems = [];

export function addCart_Reducer(state=initialstate,action) {
    console.log('reducer')
    switch(action.type) {
        case ADDCART:
        newCartitems.push(action.cartItems)
        return (<any>Object).assign({},state,{
            cartItems: newCartitems
        })

        default:
        return state
    }
}
