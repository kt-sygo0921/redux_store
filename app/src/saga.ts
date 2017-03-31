
import {takeEvery,delay} from 'redux-saga';
import {put, call,fork} from 'redux-saga/effects';
import {REQUEST_USER,request_user} from './action';
import {DATA} from './util';


function* fetchItemModel() {
    const data = DATA
    console.log('あああ');
    // yield call(delay,1000);
    yield put(request_user(data));
}

function* requestSaga() {
    yield takeEvery(REQUEST_USER,fetchItemModel);
}

export default function* rootSaga() {
    yield fork(requestSaga);
}
