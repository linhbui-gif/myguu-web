import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { saveVoucherAction } from '@/redux/actions';
import { saveVoucher, TSaveVoucherResponse } from '@/services/api';

// FUNCTION

export function* saveVoucherSaga(action: ActionType<typeof saveVoucherAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(saveVoucher, materials);
    const saveVoucherResponse: TSaveVoucherResponse = response as TSaveVoucherResponse;
    yield put(saveVoucherAction.success(saveVoucherResponse));
    successCallback?.(saveVoucherResponse);
  } catch (err) {
    yield put(saveVoucherAction.failure(err));
    failedCallback?.(err);
  }
}
