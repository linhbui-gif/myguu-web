import { createActionCreator } from 'deox';

import {
  TGetVouchersByStoreMaterials,
  TGetVouchersByStoreResponse,
} from '@/services/api/voucher/get-vouchers-by-store';

// CONSTANTS

export enum EGetVouchersByStoreAction {
  GET_VOUCHERS_BY_STORE = 'GET_VOUCHERS_BY_STORE',
  GET_VOUCHERS_BY_STORE_REQUEST = 'GET_VOUCHERS_BY_STORE_REQUEST',
  GET_VOUCHERS_BY_STORE_SUCCESS = 'GET_VOUCHERS_BY_STORE_SUCCESS',
  GET_VOUCHERS_BY_STORE_FAILED = 'GET_VOUCHERS_BY_STORE_FAILED',
}

// TYPES

export type TGetVouchersByStoreRequest = {
  type: EGetVouchersByStoreAction.GET_VOUCHERS_BY_STORE_REQUEST;
  payload: {
    materials: TGetVouchersByStoreMaterials;
    successCallback?: (response: TGetVouchersByStoreResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetVouchersByStoreSuccess = {
  type: EGetVouchersByStoreAction.GET_VOUCHERS_BY_STORE_SUCCESS;
  payload: { response: TGetVouchersByStoreResponse };
};

export type TGetVouchersByStoreFailed = { type: EGetVouchersByStoreAction.GET_VOUCHERS_BY_STORE_FAILED };

// FUNCTION

export const getVouchersByStoreAction = {
  request: createActionCreator(
    EGetVouchersByStoreAction.GET_VOUCHERS_BY_STORE_REQUEST,
    (resolve) =>
      (
        materials: TGetVouchersByStoreMaterials,
        successCallback?: (response: TGetVouchersByStoreResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetVouchersByStoreRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetVouchersByStoreAction.GET_VOUCHERS_BY_STORE_SUCCESS,
    (resolve) =>
      (response: TGetVouchersByStoreResponse): TGetVouchersByStoreSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetVouchersByStoreAction.GET_VOUCHERS_BY_STORE_FAILED,
    (resolve) =>
      (error: unknown): TGetVouchersByStoreFailed =>
        resolve({ error }),
  ),
};
