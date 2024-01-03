import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { registerAction } from '@/redux/actions';
import { register, TRegisterResponse } from '@/services/api';

// FUNCTION

export function* registerSaga(action: ActionType<typeof registerAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(register, materials);
    const registerResponse: TRegisterResponse = response as TRegisterResponse;
    yield put(registerAction.success(registerResponse));
    successCallback?.(registerResponse);
  } catch (err) {
    yield put(registerAction.failure(err));
    failedCallback?.(err);
  }
}
