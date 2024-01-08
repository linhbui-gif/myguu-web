import { createActionCreator } from 'deox';

import { TSaveVoucherMaterials, TSaveVoucherResponse } from '@/services/api/voucher/save-voucher';

// CONSTANTS

export enum ESaveVoucherAction {
  SAVE_VOUCHER = 'SAVE_VOUCHER',
  SAVE_VOUCHER_REQUEST = 'SAVE_VOUCHER_REQUEST',
  SAVE_VOUCHER_SUCCESS = 'SAVE_VOUCHER_SUCCESS',
  SAVE_VOUCHER_FAILED = 'SAVE_VOUCHER_FAILED',
}

// TYPES

export type TSaveVoucherRequest = {
  type: ESaveVoucherAction.SAVE_VOUCHER_REQUEST;
  payload: {
    materials: TSaveVoucherMaterials;
    successCallback?: (response: TSaveVoucherResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TSaveVoucherSuccess = {
  type: ESaveVoucherAction.SAVE_VOUCHER_SUCCESS;
  payload: { response: TSaveVoucherResponse };
};

export type TSaveVoucherFailed = { type: ESaveVoucherAction.SAVE_VOUCHER_FAILED };

// FUNCTION

export const saveVoucherAction = {
  request: createActionCreator(
    ESaveVoucherAction.SAVE_VOUCHER_REQUEST,
    (resolve) =>
      (
        materials: TSaveVoucherMaterials,
        successCallback?: (response: TSaveVoucherResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TSaveVoucherRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    ESaveVoucherAction.SAVE_VOUCHER_SUCCESS,
    (resolve) =>
      (response: TSaveVoucherResponse): TSaveVoucherSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ESaveVoucherAction.SAVE_VOUCHER_FAILED,
    (resolve) =>
      (error: unknown): TSaveVoucherFailed =>
        resolve({ error }),
  ),
};
