import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getStoresByCategoryAction } from '@/redux/actions';
import { getStoresByCategory, TGetStoresByCategoryResponse } from '@/services/api';

// FUNCTION

export function* getStoresByCategorySaga(action: ActionType<typeof getStoresByCategoryAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getStoresByCategory, materials);
    const getStoresByCategoryResponse: TGetStoresByCategoryResponse = response as TGetStoresByCategoryResponse;
    yield put(getStoresByCategoryAction.success(getStoresByCategoryResponse));
    successCallback?.(getStoresByCategoryResponse);
  } catch (err) {
    yield put(getStoresByCategoryAction.failure(err));
    failedCallback?.(err);
  }
}
