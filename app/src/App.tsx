import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Container from './component/container';
import Header from './component/Header';
import Footer from './component/Footer';
import {If_item} from './interface';
import {addCart} from './action';

export class App extends React.Component<any,any> {
    constructor() {
        super();
    }
    render():JSX.Element {
        const {listItems,cartItems,addCart} = this.props;//jsonデータを格納
        return (
            <div>
                <Header />
                <Container
                listItems={listItems}
                cartItems={cartItems}
                addCart = {addCart}
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
        addCart(cartItems) {
            dispatch(addCart(cartItems));
        }
    }
}

export const CountComponent = connect(
    mapStatetoProps,
    mapDispatchtoPorps
)(App)
