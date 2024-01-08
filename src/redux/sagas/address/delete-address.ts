import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { deleteAddressAction } from '@/redux/actions';
import { deleteAddress, TDeleteAddressResponse } from '@/services/api';

// FUNCTION

export function* deleteAddressSaga(action: ActionType<typeof deleteAddressAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(deleteAddress, materials);
    const deleteAddressResponse: TDeleteAddressResponse = response as TDeleteAddressResponse;
    yield put(deleteAddressAction.success(deleteAddressResponse));
    successCallback?.(deleteAddressResponse);
  } catch (err) {
    yield put(deleteAddressAction.failure(err));
    failedCallback?.(err);
  }
}
