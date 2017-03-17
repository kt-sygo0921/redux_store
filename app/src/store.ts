import {Store,createStore,applyMiddleware} from 'redux';
import combine from './reducer/combine';
import * as createLogger from "redux-logger";

const logger = (createLogger as any)();
const createStoreWithMIddleWare = applyMiddleware(logger)(createStore);
const configureStore = createStoreWithMIddleWare(combine)

export default configureStore;
