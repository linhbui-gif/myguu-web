import { createActionCreator } from 'deox';

import { TChangePasswordMaterials, TChangePasswordResponse } from '@/services/api/auth/change-password';

// CONSTANTS

export enum EChangePasswordAction {
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  CHANGE_PASSWORD_REQUEST = 'CHANGE_PASSWORD_REQUEST',
  CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_FAILED = 'CHANGE_PASSWORD_FAILED',
}

// TYPES

export type TChangePasswordRequest = {
  type: EChangePasswordAction.CHANGE_PASSWORD_REQUEST;
  payload: {
    materials: TChangePasswordMaterials;
    successCallback?: (response: TChangePasswordResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TChangePasswordSuccess = {
  type: EChangePasswordAction.CHANGE_PASSWORD_SUCCESS;
  payload: { response: TChangePasswordResponse };
};

export type TChangePasswordFailed = { type: EChangePasswordAction.CHANGE_PASSWORD_FAILED };

// FUNCTION

export const changePasswordAction = {
  request: createActionCreator(
    EChangePasswordAction.CHANGE_PASSWORD_REQUEST,
    (resolve) =>
      (
        materials: TChangePasswordMaterials,
        successCallback?: (response: TChangePasswordResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TChangePasswordRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EChangePasswordAction.CHANGE_PASSWORD_SUCCESS,
    (resolve) =>
      (response: TChangePasswordResponse): TChangePasswordSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EChangePasswordAction.CHANGE_PASSWORD_FAILED,
    (resolve) =>
      (error: unknown): TChangePasswordFailed =>
        resolve({ error }),
  ),
};
