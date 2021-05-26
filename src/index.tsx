import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import rootSaga from './sagas/sagas'
import "./css/index.less"
import App from "./App";

import reportWebVitals from './reportWebVitals';

// virtual data
import "./mock/index.js"

import store from "./store";

store.runSaga(rootSaga);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root") as HTMLElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
