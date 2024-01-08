import { TVoucherState } from '@/redux/reducers/voucher';
import { TSaveVoucherSuccess } from '@/redux/actions/voucher';

export const saveVoucherUpdateState = (state: TVoucherState, action: TSaveVoucherSuccess): TVoucherState => ({
  ...state,
  saveVoucherResponse: action.payload.response,
});
