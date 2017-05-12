import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import {CountComponent}  from './App';

const store = configureStore();


window.addEventListener('load', () => {
    ReactDOM.render(
        <Provider store= {store}>
            <CountComponent />
        </Provider>,
        document.querySelector('#content2')
    )
},false);

