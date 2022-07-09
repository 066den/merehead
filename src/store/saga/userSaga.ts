import { actionCreators } from './../reducers/action-creators';

import { UserActionEnum, FetchUserAction } from './../reducers/users/types';
import { AxiosResponse } from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';
import { apiRequests } from '../../apiRequests';

function* fetchUsersWorker() {
  try {
    const response: AxiosResponse = yield call(apiRequests.fetchUsersFromApi);
    yield put(actionCreators.setUsers(response.data));
  } catch (e) {
    console.log(e);
  }
}

function* fetchUserWorker(action: FetchUserAction) {
  try {
    const response: AxiosResponse = yield call(
      apiRequests.fetchUserFromApi,
      action.payload
    );
    yield put(actionCreators.setUser(response.data));
  } catch (e) {
    console.log(e);
  }
}

export function* userWatcher() {
  yield takeEvery(UserActionEnum.FETCH_USERS, fetchUsersWorker);
  yield takeEvery(UserActionEnum.FETCH_USER, fetchUserWorker);
}
