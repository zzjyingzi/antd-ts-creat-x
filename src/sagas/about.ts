import {put, takeEvery, take, call, fork, delay, all} from 'redux-saga/effects';

import getAboutData from '../services/about'


function* listAddReflect():Generator<any, void, any> {
  const res = yield call(getAboutData, {});
  yield put({type: 'ABOUTLISTSHOW', data: res.data});
}

function* watchAboutTodoListRequestData() {
  while (true) {
    yield take('ABOUTLOADDATA');
    yield call(listAddReflect)
  }
}


export default function* about() {
  yield fork(watchAboutTodoListRequestData);
}
