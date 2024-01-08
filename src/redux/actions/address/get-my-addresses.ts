import { createActionCreator } from 'deox';

import { TGetMyAddressesMaterials, TGetMyAddressesResponse } from '@/services/api/address/get-my-addresses';

// CONSTANTS

export enum EGetMyAddressesAction {
  GET_MY_ADDRESSES = 'GET_MY_ADDRESSES',
  GET_MY_ADDRESSES_REQUEST = 'GET_MY_ADDRESSES_REQUEST',
  GET_MY_ADDRESSES_SUCCESS = 'GET_MY_ADDRESSES_SUCCESS',
  GET_MY_ADDRESSES_FAILED = 'GET_MY_ADDRESSES_FAILED',
}

// TYPES

export type TGetMyAddressesRequest = {
  type: EGetMyAddressesAction.GET_MY_ADDRESSES_REQUEST;
  payload: {
    materials: TGetMyAddressesMaterials;
    successCallback?: (response: TGetMyAddressesResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetMyAddressesSuccess = {
  type: EGetMyAddressesAction.GET_MY_ADDRESSES_SUCCESS;
  payload: { response: TGetMyAddressesResponse };
};

export type TGetMyAddressesFailed = { type: EGetMyAddressesAction.GET_MY_ADDRESSES_FAILED };

// FUNCTION

export const getMyAddressesAction = {
  request: createActionCreator(
    EGetMyAddressesAction.GET_MY_ADDRESSES_REQUEST,
    (resolve) =>
      (
        materials: TGetMyAddressesMaterials,
        successCallback?: (response: TGetMyAddressesResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetMyAddressesRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetMyAddressesAction.GET_MY_ADDRESSES_SUCCESS,
    (resolve) =>
      (response: TGetMyAddressesResponse): TGetMyAddressesSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetMyAddressesAction.GET_MY_ADDRESSES_FAILED,
    (resolve) =>
      (error: unknown): TGetMyAddressesFailed =>
        resolve({ error }),
  ),
};
