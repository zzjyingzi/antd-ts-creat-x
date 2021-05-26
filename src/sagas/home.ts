import { put, takeEvery, take, call, fork, delay, all, join } from 'redux-saga/effects';

import getHomeData from '../services/home'

function* listAddReflect() :Generator<any, void, any>{
  const data = yield call(getHomeData, {});
  yield put({type: 'HOMELISTSHOW', data: data.data});
}

function* watchMaintainTodoListRequestData() {
  while (true) {
    yield take('HOMELOADDATA');
    yield call(listAddReflect)
  }
}


export default function* home() {
  yield fork(watchMaintainTodoListRequestData);
}

