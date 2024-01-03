import { TAuthState } from '@/redux/reducers/auth';
import { TVerifyForgotPasswordSuccess } from '@/redux/actions/auth';

export const verifyForgotPasswordUpdateState = (
  state: TAuthState,
  action: TVerifyForgotPasswordSuccess,
): TAuthState => ({
  ...state,
  verifyForgotPasswordResponse: action.payload.response,
});
