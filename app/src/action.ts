export const ADDCART = 'ADDCART';

export function addcart(newCartItems) {
    return {
        type:ADDCART,
        cartItems:newCartItems
    }
}
