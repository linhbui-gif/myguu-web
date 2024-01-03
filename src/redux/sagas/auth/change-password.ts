import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { changePasswordAction } from '@/redux/actions';
import { changePassword, TChangePasswordResponse } from '@/services/api';

// FUNCTION

export function* changePasswordSaga(action: ActionType<typeof changePasswordAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(changePassword, materials);
    const changePasswordResponse: TChangePasswordResponse = response as TChangePasswordResponse;
    yield put(changePasswordAction.success(changePasswordResponse));
    successCallback?.(changePasswordResponse);
  } catch (err) {
    yield put(changePasswordAction.failure(err));
    failedCallback?.(err);
  }
}
