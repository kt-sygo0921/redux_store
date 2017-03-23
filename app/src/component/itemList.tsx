import * as React from 'react';
import Item from './Item';

interface If_itemList_props {
    listItems:any[];
    addCart():{};
}

export default class ItemList extends React.Component<If_itemList_props,any> {
    render():JSX.Element {
        const {listItems, addCart} = this.props;
        return (
            <ul className="ItemList">
                {listItems.map((items,idx) => {
                    return (
                        <li className="ItemList__item" key = {idx}>
                            <Item items = {items} addCart = {addCart} btnLabel="カートに入れる" />
                        </li>
                    )
                })}
            </ul>
        )
    }
};
