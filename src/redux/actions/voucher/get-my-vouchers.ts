import { createActionCreator } from 'deox';

import { TGetMyVouchersMaterials, TGetMyVouchersResponse } from '@/services/api/voucher/get-my-vouchers';

// CONSTANTS

export enum EGetMyVouchersAction {
  GET_MY_VOUCHERS = 'GET_MY_VOUCHERS',
  GET_MY_VOUCHERS_REQUEST = 'GET_MY_VOUCHERS_REQUEST',
  GET_MY_VOUCHERS_SUCCESS = 'GET_MY_VOUCHERS_SUCCESS',
  GET_MY_VOUCHERS_FAILED = 'GET_MY_VOUCHERS_FAILED',
}

// TYPES

export type TGetMyVouchersRequest = {
  type: EGetMyVouchersAction.GET_MY_VOUCHERS_REQUEST;
  payload: {
    materials: TGetMyVouchersMaterials;
    successCallback?: (response: TGetMyVouchersResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetMyVouchersSuccess = {
  type: EGetMyVouchersAction.GET_MY_VOUCHERS_SUCCESS;
  payload: { response: TGetMyVouchersResponse };
};

export type TGetMyVouchersFailed = { type: EGetMyVouchersAction.GET_MY_VOUCHERS_FAILED };

// FUNCTION

export const getMyVouchersAction = {
  request: createActionCreator(
    EGetMyVouchersAction.GET_MY_VOUCHERS_REQUEST,
    (resolve) =>
      (
        materials: TGetMyVouchersMaterials,
        successCallback?: (response: TGetMyVouchersResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetMyVouchersRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetMyVouchersAction.GET_MY_VOUCHERS_SUCCESS,
    (resolve) =>
      (response: TGetMyVouchersResponse): TGetMyVouchersSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetMyVouchersAction.GET_MY_VOUCHERS_FAILED,
    (resolve) =>
      (error: unknown): TGetMyVouchersFailed =>
        resolve({ error }),
  ),
};
