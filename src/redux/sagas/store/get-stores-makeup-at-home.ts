import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getStoresMakeupAtHomeAction } from '@/redux/actions';
import { getStoresMakeupAtHome, TGetStoresMakeupAtHomeResponse } from '@/services/api';

// FUNCTION

export function* getStoresMakeupAtHomeSaga(action: ActionType<typeof getStoresMakeupAtHomeAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getStoresMakeupAtHome, materials);
    const getStoresMakeupAtHomeResponse: TGetStoresMakeupAtHomeResponse = response as TGetStoresMakeupAtHomeResponse;
    yield put(getStoresMakeupAtHomeAction.success(getStoresMakeupAtHomeResponse));
    successCallback?.(getStoresMakeupAtHomeResponse);
  } catch (err) {
    yield put(getStoresMakeupAtHomeAction.failure(err));
    failedCallback?.(err);
  }
}
