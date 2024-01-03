import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { authLoginAction } from '@/redux/actions';
import { authLogin, TAuthLoginResponse } from '@/services/api';
import Helpers from '@/services/helpers';

// FUNCTION

export function* authLoginSaga(action: ActionType<typeof authLoginAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(authLogin, materials);
    const authLoginResponse: TAuthLoginResponse = response as TAuthLoginResponse;

    Helpers.storeAccessToken('');
    Helpers.storeRefreshToken('');

    yield put(authLoginAction.success(authLoginResponse));
    successCallback?.(authLoginResponse);
  } catch (err) {
    yield put(authLoginAction.failure(err));
    failedCallback?.(err);
  }
}
