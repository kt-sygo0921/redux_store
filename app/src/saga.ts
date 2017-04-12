
import {takeEvery,delay} from 'redux-saga';
import {put, call,fork} from 'redux-saga/effects';
import {REQUEST_USER,request_user,SUCCESS} from './action';
import {DATA} from './util';

export function* fetchItemModel() {
    const data = DATA;
    yield call(delay,1000);
    yield put(request_user(data));
}

function* requestSaga() {
    yield takeEvery(SUCCESS,fetchItemModel);
}

export function* rootSaga() {
    yield fork(requestSaga);
}
