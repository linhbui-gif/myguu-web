import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getServicesBySearchAction } from '@/redux/actions';
import { getServicesBySearch, TGetServicesBySearchResponse } from '@/services/api';

// FUNCTION

export function* getServicesBySearchSaga(action: ActionType<typeof getServicesBySearchAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getServicesBySearch, materials);
    const getServicesBySearchResponse: TGetServicesBySearchResponse = response as TGetServicesBySearchResponse;
    yield put(getServicesBySearchAction.success(getServicesBySearchResponse));
    successCallback?.(getServicesBySearchResponse);
  } catch (err) {
    yield put(getServicesBySearchAction.failure(err));
    failedCallback?.(err);
  }
}
