import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getStoreAction } from '@/redux/actions';
import { getStore, TGetStoreResponse } from '@/services/api';

// FUNCTION

export function* getStoreSaga(action: ActionType<typeof getStoreAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getStore, materials);
    const getStoreResponse: TGetStoreResponse = response as TGetStoreResponse;
    yield put(getStoreAction.success(getStoreResponse));
    successCallback?.(getStoreResponse);
  } catch (err) {
    yield put(getStoreAction.failure(err));
    failedCallback?.(err);
  }
}
