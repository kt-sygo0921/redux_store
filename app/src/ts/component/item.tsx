import * as React from 'react';

interface If_item_props {
    items:{
        title:string;
        author:string;
        desc:string;
        price:number;

    }
    actionEvent?(items:object):{};
    btnLabel?:string;
}

export default class Item extends React.Component<If_item_props,any> {
    constructor(props) {
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick() {
        console.log(this)
        this.props.actionEvent(this.props.items);
    }
    render():JSX.Element {
        const {title,author,desc,price} = this.props.items;
        return(
            <div className="Item">
                <h3 className="Item__title">{title}</h3>
                <span className="Item__author">{author}</span>
                <p className="Item__desc">{desc}</p>
                <p className="Item__price">{price}円</p>
                <div className="Item__btnWrap">
                    <button type="button" className="Btn" onClick={this.handleClick}>{this.props.btnLabel}</button>
                </div>
            </div>
        );
    };
};
