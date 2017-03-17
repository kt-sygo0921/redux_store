import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import {fetchItemModel} from './util';
import {CountComponent}  from './App';


window.addEventListener('load', () => {
    fetchItemModel()
        .then((res) => {
            const data:any = res;
            ReactDOM.render(
            <Provider store= {configureStore}>
                <div>
                    <CountComponent listItems={data.data } />,
                </div>
            </Provider>,
            document.querySelector('#content2')
        )
    })
},false);

