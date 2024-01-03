import { all, takeLatest } from 'redux-saga/effects';

import {
  changePasswordAction,
  forgotPasswordAction,
  loginAction,
  logoutAction,
  registerAction,
  verifyForgotPasswordAction,
  verifyRegisterAction,
} from '@/redux/actions';

import { changePasswordSaga } from './change-password';
import { forgotPasswordSaga } from './forgot-password';
import { loginSaga } from './login';
import { logoutSaga } from './logout';
import { registerSaga } from './register';
import { verifyForgotPasswordSaga } from './verify-forgot-password';
import { verifyRegisterSaga } from './verify-register';

export default function* root(): Generator {
  yield all([
    takeLatest(changePasswordAction.request.type, changePasswordSaga),
    takeLatest(forgotPasswordAction.request.type, forgotPasswordSaga),
    takeLatest(loginAction.request.type, loginSaga),
    takeLatest(logoutAction.request.type, logoutSaga),
    takeLatest(registerAction.request.type, registerSaga),
    takeLatest(verifyForgotPasswordAction.request.type, verifyForgotPasswordSaga),
    takeLatest(verifyRegisterAction.request.type, verifyRegisterSaga),
  ]);
}
