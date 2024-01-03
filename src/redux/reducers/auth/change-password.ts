import { TAuthState } from '@/redux/reducers/auth';
import { TChangePasswordSuccess } from '@/redux/actions/auth';

export const changePasswordUpdateState = (state: TAuthState, action: TChangePasswordSuccess): TAuthState => ({
  ...state,
  changePasswordResponse: action.payload.response,
});
