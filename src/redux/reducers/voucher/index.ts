import { createReducer } from 'deox';

import { TGetMyVouchersResponse, TGetVouchersByStoreResponse, TSaveVoucherResponse } from '@/services/api/voucher';
import { getMyVouchersAction, getVouchersByStoreAction, saveVoucherAction } from '@/redux/actions';
import { getMyVouchersUpdateState } from './get-my-vouchers';
import { getVouchersByStoreUpdateState } from './get-vouchers-by-store';
import { saveVoucherUpdateState } from './save-voucher';

export type TVoucherState = {
  getMyVouchersResponse?: TGetMyVouchersResponse;
  getVouchersByStoreResponse?: TGetVouchersByStoreResponse;
  saveVoucherResponse?: TSaveVoucherResponse;
};

const initialState: TVoucherState = {
  getMyVouchersResponse: undefined,
  getVouchersByStoreResponse: undefined,
  saveVoucherResponse: undefined,
};

const VoucherReducer = createReducer(initialState, (handleAction) => [
  handleAction(getMyVouchersAction.success, getMyVouchersUpdateState),
  handleAction(getVouchersByStoreAction.success, getVouchersByStoreUpdateState),
  handleAction(saveVoucherAction.success, saveVoucherUpdateState),
]);

export default VoucherReducer;
