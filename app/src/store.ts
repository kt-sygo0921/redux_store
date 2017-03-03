import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import {combine} from './reducer';

export const store = createStore(combine);
