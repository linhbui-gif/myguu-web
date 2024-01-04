import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getStoresProminentPlaceAction } from '@/redux/actions';
import { getStoresProminentPlace, TGetStoresProminentPlaceResponse } from '@/services/api';

// FUNCTION

export function* getStoresProminentPlaceSaga(
  action: ActionType<typeof getStoresProminentPlaceAction.request>,
): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getStoresProminentPlace, materials);
    const getStoresProminentPlaceResponse: TGetStoresProminentPlaceResponse =
      response as TGetStoresProminentPlaceResponse;
    yield put(getStoresProminentPlaceAction.success(getStoresProminentPlaceResponse));
    successCallback?.(getStoresProminentPlaceResponse);
  } catch (err) {
    yield put(getStoresProminentPlaceAction.failure(err));
    failedCallback?.(err);
  }
}
