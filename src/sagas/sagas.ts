import {fork, all} from 'redux-saga/effects';

import home from './home'
import about from './about'
import login from './login'

//
// function* rootSaga() {
//     yield all([
//         home(),
//         // about()
//     ])
// }

const rootSaga = function* (){
    yield fork(home);
    yield fork(about);
    yield fork(login);
};


export default rootSaga
