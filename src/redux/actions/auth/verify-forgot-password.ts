import { createActionCreator } from 'deox';

import {
  TVerifyForgotPasswordMaterials,
  TVerifyForgotPasswordResponse,
} from '@/services/api/auth/verify-forgot-password';

// CONSTANTS

export enum EVerifyForgotPasswordAction {
  VERIFY_FORGOT_PASSWORD = 'VERIFY_FORGOT_PASSWORD',
  VERIFY_FORGOT_PASSWORD_REQUEST = 'VERIFY_FORGOT_PASSWORD_REQUEST',
  VERIFY_FORGOT_PASSWORD_SUCCESS = 'VERIFY_FORGOT_PASSWORD_SUCCESS',
  VERIFY_FORGOT_PASSWORD_FAILED = 'VERIFY_FORGOT_PASSWORD_FAILED',
}

// TYPES

export type TVerifyForgotPasswordRequest = {
  type: EVerifyForgotPasswordAction.VERIFY_FORGOT_PASSWORD_REQUEST;
  payload: {
    materials: TVerifyForgotPasswordMaterials;
    successCallback?: (response: TVerifyForgotPasswordResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TVerifyForgotPasswordSuccess = {
  type: EVerifyForgotPasswordAction.VERIFY_FORGOT_PASSWORD_SUCCESS;
  payload: { response: TVerifyForgotPasswordResponse };
};

export type TVerifyForgotPasswordFailed = { type: EVerifyForgotPasswordAction.VERIFY_FORGOT_PASSWORD_FAILED };

// FUNCTION

export const verifyForgotPasswordAction = {
  request: createActionCreator(
    EVerifyForgotPasswordAction.VERIFY_FORGOT_PASSWORD_REQUEST,
    (resolve) =>
      (
        materials: TVerifyForgotPasswordMaterials,
        successCallback?: (response: TVerifyForgotPasswordResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TVerifyForgotPasswordRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EVerifyForgotPasswordAction.VERIFY_FORGOT_PASSWORD_SUCCESS,
    (resolve) =>
      (response: TVerifyForgotPasswordResponse): TVerifyForgotPasswordSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EVerifyForgotPasswordAction.VERIFY_FORGOT_PASSWORD_FAILED,
    (resolve) =>
      (error: unknown): TVerifyForgotPasswordFailed =>
        resolve({ error }),
  ),
};
