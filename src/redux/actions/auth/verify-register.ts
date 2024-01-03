import { createActionCreator } from 'deox';

import { TVerifyRegisterMaterials, TVerifyRegisterResponse } from '@/services/api/auth/verify-register';

// CONSTANTS

export enum EVerifyRegisterAction {
  VERIFY_REGISTER = 'VERIFY_REGISTER',
  VERIFY_REGISTER_REQUEST = 'VERIFY_REGISTER_REQUEST',
  VERIFY_REGISTER_SUCCESS = 'VERIFY_REGISTER_SUCCESS',
  VERIFY_REGISTER_FAILED = 'VERIFY_REGISTER_FAILED',
}

// TYPES

export type TVerifyRegisterRequest = {
  type: EVerifyRegisterAction.VERIFY_REGISTER_REQUEST;
  payload: {
    materials: TVerifyRegisterMaterials;
    successCallback?: (response: TVerifyRegisterResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TVerifyRegisterSuccess = {
  type: EVerifyRegisterAction.VERIFY_REGISTER_SUCCESS;
  payload: { response: TVerifyRegisterResponse };
};

export type TVerifyRegisterFailed = { type: EVerifyRegisterAction.VERIFY_REGISTER_FAILED };

// FUNCTION

export const verifyRegisterAction = {
  request: createActionCreator(
    EVerifyRegisterAction.VERIFY_REGISTER_REQUEST,
    (resolve) =>
      (
        materials: TVerifyRegisterMaterials,
        successCallback?: (response: TVerifyRegisterResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TVerifyRegisterRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EVerifyRegisterAction.VERIFY_REGISTER_SUCCESS,
    (resolve) =>
      (response: TVerifyRegisterResponse): TVerifyRegisterSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EVerifyRegisterAction.VERIFY_REGISTER_FAILED,
    (resolve) =>
      (error: unknown): TVerifyRegisterFailed =>
        resolve({ error }),
  ),
};
