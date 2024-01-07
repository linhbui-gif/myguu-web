import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getStoresBySearchAction } from '@/redux/actions';
import { getStoresBySearch, TGetStoresBySearchResponse } from '@/services/api';

// FUNCTION

export function* getStoresBySearchSaga(action: ActionType<typeof getStoresBySearchAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getStoresBySearch, materials);
    const getStoresBySearchResponse: TGetStoresBySearchResponse = response as TGetStoresBySearchResponse;
    yield put(getStoresBySearchAction.success(getStoresBySearchResponse));
    successCallback?.(getStoresBySearchResponse);
  } catch (err) {
    yield put(getStoresBySearchAction.failure(err));
    failedCallback?.(err);
  }
}
