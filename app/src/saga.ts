
import {takeEvery,delay} from 'redux-saga';
import {put, call,fork} from 'redux-saga/effects';
import {REQUEST_USER,request_user,SUCCESS} from './action';
import {DATA} from './util';
import * as axios from 'axios';

export function* fetchItemModel() {
    const hoge = yield call(get_Json,1000);
    yield put(request_user(hoge.data));

    // yield call(delay,1000);
    // yield put(request_user(data));
}

function* requestSaga() {
    yield takeEvery(SUCCESS,fetchItemModel);
}

export function* rootSaga() {
    yield fork(requestSaga);
}

const get_Json = () => {
    return axios.get('http://192.168.64.33:3000/src/data.json')
    .then((data) => {
        return data
        //put(request_user(data.data));
    })
}
