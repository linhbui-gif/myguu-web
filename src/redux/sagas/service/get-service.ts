import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getServiceAction } from '@/redux/actions';
import { getService, TGetServiceResponse } from '@/services/api';

// FUNCTION

export function* getServiceSaga(action: ActionType<typeof getServiceAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getService, materials);
    const getServiceResponse: TGetServiceResponse = response as TGetServiceResponse;
    yield put(getServiceAction.success(getServiceResponse));
    successCallback?.(getServiceResponse);
  } catch (err) {
    yield put(getServiceAction.failure(err));
    failedCallback?.(err);
  }
}
