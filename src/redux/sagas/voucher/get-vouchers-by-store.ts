import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getVouchersByStoreAction } from '@/redux/actions';
import { getVouchersByStore, TGetVouchersByStoreResponse } from '@/services/api';

// FUNCTION

export function* getVouchersByStoreSaga(action: ActionType<typeof getVouchersByStoreAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getVouchersByStore, materials);
    const getVouchersByStoreResponse: TGetVouchersByStoreResponse = response as TGetVouchersByStoreResponse;
    yield put(getVouchersByStoreAction.success(getVouchersByStoreResponse));
    successCallback?.(getVouchersByStoreResponse);
  } catch (err) {
    yield put(getVouchersByStoreAction.failure(err));
    failedCallback?.(err);
  }
}
