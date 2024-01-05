import { createReducer } from 'deox';

import { TGetVouchersByStoreResponse } from '@/services/api/voucher';
import { getVouchersByStoreAction } from '@/redux/actions';
import { getVouchersByStoreUpdateState } from './get-vouchers-by-store';

export type TVoucherState = {
  getVouchersByStoreResponse?: TGetVouchersByStoreResponse;
};

const initialState: TVoucherState = {
  getVouchersByStoreResponse: undefined,
};

const VoucherReducer = createReducer(initialState, (handleAction) => [
  handleAction(getVouchersByStoreAction.success, getVouchersByStoreUpdateState),
]);

export default VoucherReducer;
