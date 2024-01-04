import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getStoresNearByAction } from '@/redux/actions';
import { getStoresNearBy, TGetStoresNearByResponse } from '@/services/api';

// FUNCTION

export function* getStoresNearBySaga(action: ActionType<typeof getStoresNearByAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getStoresNearBy, materials);
    const getStoresNearByResponse: TGetStoresNearByResponse = response as TGetStoresNearByResponse;
    yield put(getStoresNearByAction.success(getStoresNearByResponse));
    successCallback?.(getStoresNearByResponse);
  } catch (err) {
    yield put(getStoresNearByAction.failure(err));
    failedCallback?.(err);
  }
}
