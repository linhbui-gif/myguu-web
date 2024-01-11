import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getAddressGeocodeAction } from '@/redux/actions';
import { getAddressGeocode, TGetAddressGeocodeResponse } from '@/services/api';

// FUNCTION

export function* getAddressGeocodeSaga(action: ActionType<typeof getAddressGeocodeAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getAddressGeocode, materials);
    const getAddressGeocodeResponse: TGetAddressGeocodeResponse = response as TGetAddressGeocodeResponse;
    yield put(getAddressGeocodeAction.success(getAddressGeocodeResponse));
    successCallback?.(getAddressGeocodeResponse);
  } catch (err) {
    yield put(getAddressGeocodeAction.failure(err));
    failedCallback?.(err);
  }
}
