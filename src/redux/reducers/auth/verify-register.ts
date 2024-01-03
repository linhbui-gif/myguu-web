import { TAuthState } from '@/redux/reducers/auth';
import { TVerifyRegisterSuccess } from '@/redux/actions/auth';

export const verifyRegisterUpdateState = (state: TAuthState, action: TVerifyRegisterSuccess): TAuthState => ({
  ...state,
  verifyRegisterResponse: action.payload.response,
});
