import {Store,createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as createLogger from "redux-logger";
import combine from './reducer/combine';
import {rootSaga} from './saga';

 const logger = (createLogger as any)();
// const createStoreWithMIddleWare = applyMiddleware(logger)(createStore);
// const configureStore = createStoreWithMIddleWare(combine)

export default function configureStore () {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(combine,
    applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

// export default configureStore;
