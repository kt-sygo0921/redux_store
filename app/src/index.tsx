import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//import {store} from './store';
import {fetchItemModel} from './util';
import {App}  from './App';


window.addEventListener('load', () => {
    fetchItemModel()
        .then((res) => {
            console.log(res.data);
            ReactDOM.render(
            // <Provider store= {store}>
                <App listItems={ res.data } />,
            // </Provider>,
            document.querySelector('#content2')
        )
    })
},false);

