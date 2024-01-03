import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { forgotPasswordAction } from '@/redux/actions';
import { forgotPassword, TForgotPasswordResponse } from '@/services/api';

// FUNCTION

export function* forgotPasswordSaga(action: ActionType<typeof forgotPasswordAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(forgotPassword, materials);
    const forgotPasswordResponse: TForgotPasswordResponse = response as TForgotPasswordResponse;
    yield put(forgotPasswordAction.success(forgotPasswordResponse));
    successCallback?.(forgotPasswordResponse);
  } catch (err) {
    yield put(forgotPasswordAction.failure(err));
    failedCallback?.(err);
  }
}
