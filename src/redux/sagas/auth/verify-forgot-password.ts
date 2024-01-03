import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { verifyForgotPasswordAction } from '@/redux/actions';
import { verifyForgotPassword, TVerifyForgotPasswordResponse } from '@/services/api';

// FUNCTION

export function* verifyForgotPasswordSaga(action: ActionType<typeof verifyForgotPasswordAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(verifyForgotPassword, materials);
    const verifyForgotPasswordResponse: TVerifyForgotPasswordResponse = response as TVerifyForgotPasswordResponse;
    yield put(verifyForgotPasswordAction.success(verifyForgotPasswordResponse));
    successCallback?.(verifyForgotPasswordResponse);
  } catch (err) {
    yield put(verifyForgotPasswordAction.failure(err));
    failedCallback?.(err);
  }
}
