import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Container from './component/container';
import Header from './component/Header';
import Footer from './component/Footer';
import {addCart,removeCart,request_user,success_event} from './action';


interface If_App_props {
        data: any[],
        cartItems: any[],
        addCart(): {},
        removeCart():{,}
    success_event():{};
}

export class App extends React.Component<If_App_props,any> {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.success_event();
    }
    componentDidMount() {
        //this.props.success_event();
        //console.log(this.props)
    }
    render():JSX.Element {
        const {
            data,//jsonデータを格納
            cartItems,
            addCart,
            removeCart
        } = this.props;
        return (
            <div>
                <Header />
                <Container
                listItems={data}
                cartItems={cartItems}
                addCart = {addCart}
                removeCart = {removeCart}
                 />
                <Footer />
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return state.addCart_Reducer;
}

function mapDispatchtoProps(dispatch) {
    return {
        addCart(cartItems) {
            dispatch(addCart(cartItems));
        },
        removeCart(cartItems) {
            dispatch(removeCart(cartItems));
        },
        success_event() {
            dispatch(success_event())
        }
    }
}

export const CountComponent = connect(
    mapStatetoProps,
    mapDispatchtoProps
)(App)
