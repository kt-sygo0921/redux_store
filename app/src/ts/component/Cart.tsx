import * as React from 'react';
import Item from './Item';

interface If_Cart_props {
    actionEvent():{};
    cartItems?: any[];
}

export default class Cart extends React.Component<If_Cart_props,any> {
    render():JSX.Element {
        const {cartItems,actionEvent} = this.props;
        let Content;
        if(cartItems.length) {
            Content = cartItems.map((items,idx) => {
                return (
                    <Item key={idx} items = {items} actionEvent = {actionEvent} btnLabel="カートから削除"/>
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
