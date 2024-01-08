import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getMyAddressesAction } from '@/redux/actions';
import { getMyAddresses, TGetMyAddressesResponse } from '@/services/api';

// FUNCTION

export function* getMyAddressesSaga(action: ActionType<typeof getMyAddressesAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getMyAddresses, materials);
    const getMyAddressesResponse: TGetMyAddressesResponse = response as TGetMyAddressesResponse;
    yield put(getMyAddressesAction.success(getMyAddressesResponse));
    successCallback?.(getMyAddressesResponse);
  } catch (err) {
    yield put(getMyAddressesAction.failure(err));
    failedCallback?.(err);
  }
}
