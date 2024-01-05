import { TVoucherState } from '@/redux/reducers/voucher';
import { TGetMyVouchersSuccess } from '@/redux/actions/voucher';

export const getMyVouchersUpdateState = (state: TVoucherState, action: TGetMyVouchersSuccess): TVoucherState => ({
  ...state,
  getMyVouchersResponse: action.payload.response,
});
