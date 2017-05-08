import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Container from './component/container';
import Header from './component/Header';
import Footer from './component/Footer';
import {addCart,request_user,success_event} from './action';


interface If_App_props {
    addCart_Reducer: {
        data: any[],
        cartItems: any[],
    },
    addCart(): {},
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
            cartItems
        } = this.props.addCart_Reducer;
        console.log(this.props.addCart_Reducer);

        const {addCart} = this.props;
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
    return state;
}

function mapDispatchtoPorps(dispatch) {
    return {
        addCart(cartItems) {
            dispatch(addCart(cartItems));
        },
        removeCart() {

        },
        success_event() {
            dispatch(success_event())
        }
    }
}

export const CountComponent = connect(
    mapStatetoProps,
    mapDispatchtoPorps
)(App)
