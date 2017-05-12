import {ADDCART,REMOVECART,REQUEST_USER} from '../action';
let initialstate = {
    cartItems:[],
    data:[]
}

let newCartitems = [];



export function addCart_Reducer(state=initialstate,action) {
    switch(action.type) {
        case ADDCART:
        newCartitems.push(action.cartItems)
        const cartItems = [].concat(newCartitems);

        // console.log(cartItems)
        return (<any>Object).assign({},state,{
            cartItems:cartItems
        });

        case REMOVECART:
        console.log(newCartitems)
        return (<any>Object).assign({},state,{
            cartItems:cartItems
        });

        case REQUEST_USER:
        return (<any>Object).assign({},state,{
            data:action.data
        });

        default:
        return state
    }
}
