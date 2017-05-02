import {ADDCART,REQUEST_USER} from '../action';
let initialstate = {
    cartItems:[],
    data:[]
}

let newCartitems = [];

console.table(newCartitems)

export function addCart_Reducer(state=initialstate,action) {
    switch(action.type) {
        case ADDCART:
        newCartitems.push(action.cartItems)
        return (<any>Object).assign({},state,{
            cartItems: newCartitems
        })
        case REQUEST_USER:
        return (<any>Object).assign({},state,{
            data:action.data
        })

        default:
        return state
    }
}
