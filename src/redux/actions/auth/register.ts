import { createActionCreator } from 'deox';

import { TRegisterMaterials, TRegisterResponse } from '@/services/api/auth/register';

// CONSTANTS

export enum ERegisterAction {
  REGISTER = 'REGISTER',
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAILED = 'REGISTER_FAILED',
}

// TYPES

export type TRegisterRequest = {
  type: ERegisterAction.REGISTER_REQUEST;
  payload: {
    materials: TRegisterMaterials;
    successCallback?: (response: TRegisterResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TRegisterSuccess = {
  type: ERegisterAction.REGISTER_SUCCESS;
  payload: { response: TRegisterResponse };
};

export type TRegisterFailed = { type: ERegisterAction.REGISTER_FAILED };

// FUNCTION

export const registerAction = {
  request: createActionCreator(
    ERegisterAction.REGISTER_REQUEST,
    (resolve) =>
      (
        materials: TRegisterMaterials,
        successCallback?: (response: TRegisterResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TRegisterRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    ERegisterAction.REGISTER_SUCCESS,
    (resolve) =>
      (response: TRegisterResponse): TRegisterSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ERegisterAction.REGISTER_FAILED,
    (resolve) =>
      (error: unknown): TRegisterFailed =>
        resolve({ error }),
  ),
};
