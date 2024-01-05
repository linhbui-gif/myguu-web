import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getMyFavouriteStoresAction } from '@/redux/actions';
import { getMyFavouriteStores, TGetMyFavouriteStoresResponse } from '@/services/api';

// FUNCTION

export function* getMyFavouriteStoresSaga(action: ActionType<typeof getMyFavouriteStoresAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getMyFavouriteStores, materials);
    const getMyFavouriteStoresResponse: TGetMyFavouriteStoresResponse = response as TGetMyFavouriteStoresResponse;
    yield put(getMyFavouriteStoresAction.success(getMyFavouriteStoresResponse));
    successCallback?.(getMyFavouriteStoresResponse);
  } catch (err) {
    yield put(getMyFavouriteStoresAction.failure(err));
    failedCallback?.(err);
  }
}
