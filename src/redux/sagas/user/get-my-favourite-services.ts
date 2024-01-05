import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getMyFavouriteServicesAction } from '@/redux/actions';
import { getMyFavouriteServices, TGetMyFavouriteServicesResponse } from '@/services/api';

// FUNCTION

export function* getMyFavouriteServicesSaga(
  action: ActionType<typeof getMyFavouriteServicesAction.request>,
): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getMyFavouriteServices, materials);
    const getMyFavouriteServicesResponse: TGetMyFavouriteServicesResponse = response as TGetMyFavouriteServicesResponse;
    yield put(getMyFavouriteServicesAction.success(getMyFavouriteServicesResponse));
    successCallback?.(getMyFavouriteServicesResponse);
  } catch (err) {
    yield put(getMyFavouriteServicesAction.failure(err));
    failedCallback?.(err);
  }
}
