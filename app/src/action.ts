export const ADDCART = 'ADDCART';

export function addCart(cartItems) {
    return {
        type:ADDCART,
        cartItems
    }
}
