import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getStoresTrendingAction } from '@/redux/actions';
import { getStoresTrending, TGetStoresTrendingResponse } from '@/services/api';

// FUNCTION

export function* getStoresTrendingSaga(action: ActionType<typeof getStoresTrendingAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getStoresTrending, materials);
    const getStoresTrendingResponse: TGetStoresTrendingResponse = response as TGetStoresTrendingResponse;
    yield put(getStoresTrendingAction.success(getStoresTrendingResponse));
    successCallback?.(getStoresTrendingResponse);
  } catch (err) {
    yield put(getStoresTrendingAction.failure(err));
    failedCallback?.(err);
  }
}
