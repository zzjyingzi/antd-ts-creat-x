import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import df from '../reducers'


// const middlewares = [];
// const { logger } = require('redux-logger');


// configuring saga middleware
// const sagaMiddleware = createSagaMiddleware();
// middlewares.push(sagaMiddleware);
/* global __DEV__  */
// if (__DEV__) {
//   middlewares.push(logger);
// }
// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore); // 111

export default function configureStore(reducers: any, initialState: any) {
    // 将reducers的部分在app.ts集中引入，本部分作为独立功能存在
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(reducers, initialState, applyMiddleware(/* other middleware, */sagaMiddleware)),
        runSaga: sagaMiddleware.run
    }

    // const store = createStoreWithMiddleware(df, initialState); // 111
    // const store = createStore(df, createStoreWithMiddleware);
    // install saga run
    // store.runSaga = sagaMiddleware.run;
    // store.close = () => store.dispatch(END);
    // return store
}
