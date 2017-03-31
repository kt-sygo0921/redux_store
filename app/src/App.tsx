import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Container from './component/container';
import Header from './component/Header';
import Footer from './component/Footer';
import {addCart,request_user} from './action';


interface If_App_props {
    data: any[];
    cartItems: any[];
    addCart(): {};
}

export class App extends React.Component<If_App_props,any> {
    constructor(props) {
        super(props)
    }
    render():JSX.Element {
        const {
            data,//jsonデータを格納
            cartItems,
            addCart
        } = this.props;

        return (
            <div>
                <Header />
                <Container
                listItems={data}
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
