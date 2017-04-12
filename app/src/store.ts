import {Store,createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as createLogger from "redux-logger";
import combine from './reducer/combine';
import {rootSaga} from './saga';

 const logger = (createLogger as any)();
// const createStoreWithMIddleWare = applyMiddleware(logger)(createStore);
// const configureStore = createStoreWithMIddleWare(combine)

const configureStore = (function(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combine,
        initialState,
        applyMiddleware(logger,sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    return store;
}());

export default configureStore;
