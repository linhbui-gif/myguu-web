import { all, takeLatest } from 'redux-saga/effects';

import { getMyVouchersAction, getVouchersByStoreAction, saveVoucherAction } from '@/redux/actions';

import { getMyVouchersSaga } from './get-my-vouchers';
import { getVouchersByStoreSaga } from './get-vouchers-by-store';
import { saveVoucherSaga } from './save-voucher';

export default function* root(): Generator {
  yield all([
    takeLatest(getMyVouchersAction.request.type, getMyVouchersSaga),
    takeLatest(getVouchersByStoreAction.request.type, getVouchersByStoreSaga),
    takeLatest(saveVoucherAction.request.type, saveVoucherSaga),
  ]);
}
