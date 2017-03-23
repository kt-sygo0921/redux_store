import * as React from 'react';
import Item from './Item';

interface If_Cart_props {
    cartItems?: any[];
    removeFromCart?():{};
}

export default class Cart extends React.Component<If_Cart_props,any> {
    render():JSX.Element {
        const {cartItems,removeFromCart} = this.props;

        let Content;
        if(cartItems.length) {
            Content = cartItems.map((items,idx) => {
                return (
                    <Item key={idx} items = {items} />
                )
            });
        } else {
            Content = <span>カートに商品がありません</span>
        }
        return (
            <div className="Cart">
                {Content}
            </div>
        )
    }
}
