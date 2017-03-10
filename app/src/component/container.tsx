import * as React from 'react';
import {ItemList} from './ItemList';
import {If_item} from '../interface';

export class Container extends React.Component<any,If_item> {
    render():JSX.Element {
        const {listItems} = this.props;
        return (
            <main className="Container">
                <div className="ItemListArea Container__flex">
                    <h2>商品一覧 / 品数：{listItems.length}</h2>
                    <ItemList listItems={listItems} />
                </div>
            </main>
        )
    }
};
