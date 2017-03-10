import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {Container} from './component/container';
import Header from './component/Header';
import Footer from './component/Footer';
import {If_item} from './interface';
import {addcart} from './action';

export class App extends React.Component<any,If_item> {
    constructor() {
        super();
        this.state = {
            cartItems: []
        };
    }
    render():JSX.Element {
        const {listItems} = this.props;
        const {cartItems} = this.state;
        return (
            <div>
                <Header />
                <Container
                listItems={listItems}
                cartItems={cartItems}
                />
                <Footer />
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return state.addCart_Reducer
}

function mapDispatchtoPorps(dispatch) {
    return {
        addCart(newCartItems) {
            dispatch(addcart(newCartItems));
        }
    }
}
