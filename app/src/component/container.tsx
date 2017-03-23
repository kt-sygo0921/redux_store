import * as React from 'react';
import ItemList from './ItemList';
import { calcTotalByItems } from '../util';
import Cart from './Cart';

interface If_Container_props {
    listItems: any[];
    cartItems: any[];
    removeFromCart?():{};
    addCart(): {};
}

export default class Container extends React.Component<If_Container_props,any> {
    render():JSX.Element {
        const {listItems, cartItems, removeFromCart, addCart} = this.props;
        return (
            <main className="Container">
                <div className="ItemListArea Container__flex">
                    <h2>商品一覧 / 品数：{listItems.length}</h2>
                    <ItemList listItems={listItems} addCart = {addCart}/>
                </div>

                <div className="CartArea">
                    <h4>カート</h4>
                    <Cart cartItems = {cartItems} removeFromCart = {removeFromCart} />
                    <div className="Total">
                        計{cartItems.length}点
                        <span className="Total__price">{calcTotalByItems(cartItems)}円</span>
                    </div>
                </div>
            </main>
        )
    }
};
