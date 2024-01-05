import { TVoucherState } from '@/redux/reducers/voucher';
import { TGetVouchersByStoreSuccess } from '@/redux/actions/voucher';

export const getVouchersByStoreUpdateState = (
  state: TVoucherState,
  action: TGetVouchersByStoreSuccess,
): TVoucherState => ({
  ...state,
  getVouchersByStoreResponse: action.payload.response,
});
