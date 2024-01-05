import { all, takeLatest } from 'redux-saga/effects';

import { getVouchersByStoreAction } from '@/redux/actions';

import { getVouchersByStoreSaga } from './get-vouchers-by-store';

export default function* root(): Generator {
  yield all([takeLatest(getVouchersByStoreAction.request.type, getVouchersByStoreSaga)]);
}
