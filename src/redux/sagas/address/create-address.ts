import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { createAddressAction } from '@/redux/actions';
import { createAddress, TCreateAddressResponse } from '@/services/api';

// FUNCTION

export function* createAddressSaga(action: ActionType<typeof createAddressAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(createAddress, materials);
    const createAddressResponse: TCreateAddressResponse = response as TCreateAddressResponse;
    yield put(createAddressAction.success(createAddressResponse));
    successCallback?.(createAddressResponse);
  } catch (err) {
    yield put(createAddressAction.failure(err));
    failedCallback?.(err);
  }
}
