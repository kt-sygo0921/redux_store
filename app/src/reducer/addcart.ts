import {ADDCART} from '../action';

export function addCart_Reducer(state='',action) {
    switch(action.type) {
        case ADDCART:
        return function() {
            let newCartItems = this.state.cartitems.slice();
            newCartItems.push(action.newCartItems);
            return (<any>Object).assign({},state,{
                cartItems: newCartItems
            })
        }
        default:
        return state
    }
}
