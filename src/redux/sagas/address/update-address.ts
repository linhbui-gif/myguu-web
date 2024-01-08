import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { updateAddressAction } from '@/redux/actions';
import { updateAddress, TUpdateAddressResponse } from '@/services/api';

// FUNCTION

export function* updateAddressSaga(action: ActionType<typeof updateAddressAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(updateAddress, materials);
    const updateAddressResponse: TUpdateAddressResponse = response as TUpdateAddressResponse;
    yield put(updateAddressAction.success(updateAddressResponse));
    successCallback?.(updateAddressResponse);
  } catch (err) {
    yield put(updateAddressAction.failure(err));
    failedCallback?.(err);
  }
}
