import {ADDCART,REQUEST_USER} from '../action';
let initialstate = {
    cartItems:[],
    data:[]
}

let newCartitems = [];

export function addCart_Reducer(state=initialstate,action) {
    switch(action.type) {
        case ADDCART:
        newCartitems.push(action.cartItems)
        return (<any>Object).assign({},state,{
            cartItems: newCartitems
        })
        case REQUEST_USER:
        console.table('action');
        return (<any>Object).assign({},state,{
            data:action.data
        })

        default:
        return state
    }
}
