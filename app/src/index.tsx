import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import {CountComponent}  from './App';

let initialstate = {}

const store = configureStore(initialstate);

console.log(store);


window.addEventListener('load', () => {
    ReactDOM.render(
        <Provider store= {store}>
            <CountComponent />
        </Provider>,
        document.querySelector('#content2')
    )
},false);

