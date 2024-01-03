import { TAuthState } from '@/redux/reducers/auth';
import { TForgotPasswordSuccess } from '@/redux/actions/auth';

export const forgotPasswordUpdateState = (state: TAuthState, action: TForgotPasswordSuccess): TAuthState => ({
  ...state,
  forgotPasswordResponse: action.payload.response,
});
