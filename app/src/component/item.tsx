import * as React from 'react';
import {If_item} from '../interface';



export class Item extends React.Component<any,If_item> {
    render():JSX.Element {
        return(
            <div className="Item">
                <h3 className="Item__title">{this.props.title}</h3>
                <span className="Item__author">{this.props.author}</span>
                <p className="Item__desc">{this.props.desc}</p>
                <p className="Item__price">{this.props.proce}円</p>
                <div className="Item__btnWrap">
                    <button type="button" className="Btn" onClick={() => this.props.addCart(this.props)}>カートに入れる</button>
                </div>
            </div>
        );
    };
};
