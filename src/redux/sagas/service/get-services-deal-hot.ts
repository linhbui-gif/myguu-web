import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getServicesDealHotAction } from '@/redux/actions';
import { getServicesDealHot, TGetServicesDealHotResponse } from '@/services/api';

// FUNCTION

export function* getServicesDealHotSaga(action: ActionType<typeof getServicesDealHotAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getServicesDealHot, materials);
    const getServicesDealHotResponse: TGetServicesDealHotResponse = response as TGetServicesDealHotResponse;
    yield put(getServicesDealHotAction.success(getServicesDealHotResponse));
    successCallback?.(getServicesDealHotResponse);
  } catch (err) {
    yield put(getServicesDealHotAction.failure(err));
    failedCallback?.(err);
  }
}
