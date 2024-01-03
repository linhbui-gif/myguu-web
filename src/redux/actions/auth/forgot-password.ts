import { createActionCreator } from 'deox';

import { TForgotPasswordMaterials, TForgotPasswordResponse } from '@/services/api/auth/forgot-password';

// CONSTANTS

export enum EForgotPasswordAction {
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED',
}

// TYPES

export type TForgotPasswordRequest = {
  type: EForgotPasswordAction.FORGOT_PASSWORD_REQUEST;
  payload: {
    materials: TForgotPasswordMaterials;
    successCallback?: (response: TForgotPasswordResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TForgotPasswordSuccess = {
  type: EForgotPasswordAction.FORGOT_PASSWORD_SUCCESS;
  payload: { response: TForgotPasswordResponse };
};

export type TForgotPasswordFailed = { type: EForgotPasswordAction.FORGOT_PASSWORD_FAILED };

// FUNCTION

export const forgotPasswordAction = {
  request: createActionCreator(
    EForgotPasswordAction.FORGOT_PASSWORD_REQUEST,
    (resolve) =>
      (
        materials: TForgotPasswordMaterials,
        successCallback?: (response: TForgotPasswordResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TForgotPasswordRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EForgotPasswordAction.FORGOT_PASSWORD_SUCCESS,
    (resolve) =>
      (response: TForgotPasswordResponse): TForgotPasswordSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EForgotPasswordAction.FORGOT_PASSWORD_FAILED,
    (resolve) =>
      (error: unknown): TForgotPasswordFailed =>
        resolve({ error }),
  ),
};
