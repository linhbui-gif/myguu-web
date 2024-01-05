import { createReducer } from 'deox';

import { TGetMyVouchersResponse, TGetVouchersByStoreResponse } from '@/services/api/voucher';
import { getMyVouchersAction, getVouchersByStoreAction } from '@/redux/actions';
import { getMyVouchersUpdateState } from './get-my-vouchers';
import { getVouchersByStoreUpdateState } from './get-vouchers-by-store';

export type TVoucherState = {
  getMyVouchersResponse?: TGetMyVouchersResponse;
  getVouchersByStoreResponse?: TGetVouchersByStoreResponse;
};

const initialState: TVoucherState = {
  getMyVouchersResponse: undefined,
  getVouchersByStoreResponse: undefined,
};

const VoucherReducer = createReducer(initialState, (handleAction) => [
  handleAction(getMyVouchersAction.success, getMyVouchersUpdateState),
  handleAction(getVouchersByStoreAction.success, getVouchersByStoreUpdateState),
]);

export default VoucherReducer;
