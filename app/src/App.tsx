import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Container from './component/container';
import Header from './component/Header';
import Footer from './component/Footer';
import {addCart,request_user,success_event} from './action';


interface If_App_props {
    data: any[];
    cartItems: any[];
    addCart(): {};
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
        //this.props.sucess_event();
        //console.log(this.props)
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
