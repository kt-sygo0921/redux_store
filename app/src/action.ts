export const ADDCART = 'ADDCART';

export function addCart(cartItems) {
    console.log(cartItems);
    return {
        type:ADDCART,
        cartItems
    }
}
