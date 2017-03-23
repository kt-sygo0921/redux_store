import * as React from 'react';

interface If_item_props {
    items:{
        title:string;
        author:string;
        desc:string;
        price:number;
    }
    addCart?(items:object):{};
    btnLabel?:string;
}

export default class Item extends React.Component<If_item_props,any> {
    constructor(props) {
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick() {
        this.props.addCart(this.props.items);
        console.log('handleclick');
    }
    render():JSX.Element {
        return(
            <div className="Item">
                <h3 className="Item__title">{this.props.items.title}</h3>
                <span className="Item__author">{this.props.items.author}</span>
                <p className="Item__desc">{this.props.items.desc}</p>
                <p className="Item__price">{this.props.items.price}円</p>
                <div className="Item__btnWrap">
                    <button type="button" className="Btn" onClick={this.handleClick}>カートに入れる</button>
                </div>
            </div>
        );
    };
};
