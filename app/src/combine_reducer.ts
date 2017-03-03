import {SEND , ACT} from './action';
import {combineReducers} from 'redux';
import {formReducer} from './formreducer';
import {actReducer,countReducer} from './actreducer';


export let combine = combineReducers({
    formReducer,
    actReducer,
    countReducer
});
