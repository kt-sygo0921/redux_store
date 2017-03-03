import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import {AppContainer,CountComponent} from './component';

/*ReactDOM.render(
    <Provider store= {store}>
        <AppContainer />
    </Provider>,
    document.querySelector('.content')
)*/

ReactDOM.render(
    <Provider store= {store}>
        <CountComponent />
    </Provider>,
    document.querySelector('#content2')
)
