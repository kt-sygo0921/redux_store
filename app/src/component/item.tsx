import * as React from 'react';

export default class Item extends React.Component<any,any> {
    render():JSX.Element {
        return(
            <div className="Item">
                <h3 className="Item__title">{this.props.items.title}</h3>
                <span className="Item__author">{this.props.items.author}</span>
                <p className="Item__desc">{this.props.items.desc}</p>
                <p className="Item__price">{this.props.items.price}円</p>
                <div className="Item__btnWrap">
                    <button type="button" className="Btn" onClick={() => this.props.addCart(this.props.items)}>カートに入れる</button>
                </div>
            </div>
        );
    };
};
