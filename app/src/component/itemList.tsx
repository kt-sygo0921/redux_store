import * as React from 'react';
import Item from './Item';
import {If_item} from '../interface';


export default class ItemList extends React.Component<any,any> {
    render():JSX.Element {
        const {listItems, addCart} = this.props;
        return (
            <ul className="ItemList">
                {listItems.map((items,idx) => {
                    return (
                        <li className="ItemList__item" key={idx}>
                            <Item items = {...items} addCart = {addCart} btnLabel="カートに入れる" />
                        </li>
                    )
                })}
            </ul>
        )
    }
};
