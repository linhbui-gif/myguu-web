import { createReducer } from 'deox';

import {
  TChangePasswordResponse,
  TForgotPasswordResponse,
  TLoginResponse,
  TLogoutResponse,
  TRegisterResponse,
  TVerifyForgotPasswordResponse,
  TVerifyRegisterResponse,
} from '@/services/api/auth';
import {
  changePasswordAction,
  forgotPasswordAction,
  loginAction,
  logoutAction,
  registerAction,
  verifyForgotPasswordAction,
  verifyRegisterAction,
} from '@/redux/actions';
import { changePasswordUpdateState } from './change-password';
import { forgotPasswordUpdateState } from './forgot-password';
import { loginUpdateState } from './login';
import { logoutUpdateState } from './logout';
import { registerUpdateState } from './register';
import { verifyForgotPasswordUpdateState } from './verify-forgot-password';
import { verifyRegisterUpdateState } from './verify-register';

export type TAuthState = {
  changePasswordResponse?: TChangePasswordResponse;
  forgotPasswordResponse?: TForgotPasswordResponse;
  loginResponse?: TLoginResponse;
  logoutResponse?: TLogoutResponse;
  registerResponse?: TRegisterResponse;
  verifyForgotPasswordResponse?: TVerifyForgotPasswordResponse;
  verifyRegisterResponse?: TVerifyRegisterResponse;
};

const initialState: TAuthState = {
  changePasswordResponse: undefined,
  forgotPasswordResponse: undefined,
  loginResponse: undefined,
  logoutResponse: undefined,
  registerResponse: undefined,
  verifyForgotPasswordResponse: undefined,
  verifyRegisterResponse: undefined,
};

const AuthReducer = createReducer(initialState, (handleAction) => [
  handleAction(changePasswordAction.success, changePasswordUpdateState),
  handleAction(forgotPasswordAction.success, forgotPasswordUpdateState),
  handleAction(loginAction.success, loginUpdateState),
  handleAction(logoutAction.success, logoutUpdateState),
  handleAction(registerAction.success, registerUpdateState),
  handleAction(verifyForgotPasswordAction.success, verifyForgotPasswordUpdateState),
  handleAction(verifyRegisterAction.success, verifyRegisterUpdateState),
]);

export default AuthReducer;
