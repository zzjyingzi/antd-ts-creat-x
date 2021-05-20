import {put, takeEvery, take, call, fork, delay, all} from 'redux-saga/effects';

import loginData from '../services/login'
import {setToken} from "../util/manageStorage";


function* listAddReflect() {
  const res = yield call(loginData, {});
  yield put({type: 'LOGINSUC', data: {userName:res.data.authorName, userId:res.data.author}});
}

function* watchLoginTodoListRequestData() {
  while (true) {
    yield take('LOGIN');
    yield call(listAddReflect)
  }
}


export default function* login() {
  yield fork(watchLoginTodoListRequestData);
}
