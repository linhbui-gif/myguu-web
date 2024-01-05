import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getMyVouchersAction } from '@/redux/actions';
import { getMyVouchers, TGetMyVouchersResponse } from '@/services/api';

// FUNCTION

export function* getMyVouchersSaga(action: ActionType<typeof getMyVouchersAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getMyVouchers, materials);
    const getMyVouchersResponse: TGetMyVouchersResponse = response as TGetMyVouchersResponse;
    yield put(getMyVouchersAction.success(getMyVouchersResponse));
    successCallback?.(getMyVouchersResponse);
  } catch (err) {
    yield put(getMyVouchersAction.failure(err));
    failedCallback?.(err);
  }
}
