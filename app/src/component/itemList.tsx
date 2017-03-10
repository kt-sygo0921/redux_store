import * as React from 'react';
import {Item} from './Item';
import {If_item} from '../interface';


export class ItemList extends React.Component<any,If_item> {
    render():JSX.Element {
        const {listItems} = this.props;
        return (
            <ul className="ItemList">
                {listItems.map((items,idx) => {
                    return (
                        <li className="ItemList__item" key={idx}>
                            <Item {...items}/>
                        </li>
                    )
                })}
            </ul>
        )
    }
};
