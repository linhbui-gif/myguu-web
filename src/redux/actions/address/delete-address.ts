import { createActionCreator } from 'deox';

import { TDeleteAddressMaterials, TDeleteAddressResponse } from '@/services/api/address/delete-address';

// CONSTANTS

export enum EDeleteAddressAction {
  DELETE_ADDRESS = 'DELETE_ADDRESS',
  DELETE_ADDRESS_REQUEST = 'DELETE_ADDRESS_REQUEST',
  DELETE_ADDRESS_SUCCESS = 'DELETE_ADDRESS_SUCCESS',
  DELETE_ADDRESS_FAILED = 'DELETE_ADDRESS_FAILED',
}

// TYPES

export type TDeleteAddressRequest = {
  type: EDeleteAddressAction.DELETE_ADDRESS_REQUEST;
  payload: {
    materials: TDeleteAddressMaterials;
    successCallback?: (response: TDeleteAddressResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TDeleteAddressSuccess = {
  type: EDeleteAddressAction.DELETE_ADDRESS_SUCCESS;
  payload: { response: TDeleteAddressResponse };
};

export type TDeleteAddressFailed = { type: EDeleteAddressAction.DELETE_ADDRESS_FAILED };

// FUNCTION

export const deleteAddressAction = {
  request: createActionCreator(
    EDeleteAddressAction.DELETE_ADDRESS_REQUEST,
    (resolve) =>
      (
        materials: TDeleteAddressMaterials,
        successCallback?: (response: TDeleteAddressResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TDeleteAddressRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EDeleteAddressAction.DELETE_ADDRESS_SUCCESS,
    (resolve) =>
      (response: TDeleteAddressResponse): TDeleteAddressSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EDeleteAddressAction.DELETE_ADDRESS_FAILED,
    (resolve) =>
      (error: unknown): TDeleteAddressFailed =>
        resolve({ error }),
  ),
};
