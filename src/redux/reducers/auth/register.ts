import { TAuthState } from '@/redux/reducers/auth';
import { TRegisterSuccess } from '@/redux/actions/auth';

export const registerUpdateState = (state: TAuthState, action: TRegisterSuccess): TAuthState => ({
  ...state,
  registerResponse: action.payload.response,
});
