import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { verifyRegisterAction } from '@/redux/actions';
import { verifyRegister, TVerifyRegisterResponse } from '@/services/api';

import Helpers from '@/services/helpers';

// FUNCTION

export function* verifyRegisterSaga(action: ActionType<typeof verifyRegisterAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(verifyRegister, materials);
    const verifyRegisterResponse: TVerifyRegisterResponse = response as TVerifyRegisterResponse;

    Helpers.storeAccessToken(verifyRegisterResponse?.data?.access_token);
    Helpers.storeRefreshToken('');

    yield put(verifyRegisterAction.success(verifyRegisterResponse));
    successCallback?.(verifyRegisterResponse);
  } catch (err) {
    yield put(verifyRegisterAction.failure(err));
    failedCallback?.(err);
  }
}
