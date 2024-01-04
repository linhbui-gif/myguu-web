import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getServicesByStoreAction } from '@/redux/actions';
import { getServicesByStore, TGetServicesByStoreResponse } from '@/services/api';

// FUNCTION

export function* getServicesByStoreSaga(action: ActionType<typeof getServicesByStoreAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getServicesByStore, materials);
    const getServicesByStoreResponse: TGetServicesByStoreResponse = response as TGetServicesByStoreResponse;
    yield put(getServicesByStoreAction.success(getServicesByStoreResponse));
    successCallback?.(getServicesByStoreResponse);
  } catch (err) {
    yield put(getServicesByStoreAction.failure(err));
    failedCallback?.(err);
  }
}
