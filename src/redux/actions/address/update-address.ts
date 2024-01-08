import { createActionCreator } from 'deox';

import { TUpdateAddressMaterials, TUpdateAddressResponse } from '@/services/api/address/update-address';

// CONSTANTS

export enum EUpdateAddressAction {
  UPDATE_ADDRESS = 'UPDATE_ADDRESS',
  UPDATE_ADDRESS_REQUEST = 'UPDATE_ADDRESS_REQUEST',
  UPDATE_ADDRESS_SUCCESS = 'UPDATE_ADDRESS_SUCCESS',
  UPDATE_ADDRESS_FAILED = 'UPDATE_ADDRESS_FAILED',
}

// TYPES

export type TUpdateAddressRequest = {
  type: EUpdateAddressAction.UPDATE_ADDRESS_REQUEST;
  payload: {
    materials: TUpdateAddressMaterials;
    successCallback?: (response: TUpdateAddressResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TUpdateAddressSuccess = {
  type: EUpdateAddressAction.UPDATE_ADDRESS_SUCCESS;
  payload: { response: TUpdateAddressResponse };
};

export type TUpdateAddressFailed = { type: EUpdateAddressAction.UPDATE_ADDRESS_FAILED };

// FUNCTION

export const updateAddressAction = {
  request: createActionCreator(
    EUpdateAddressAction.UPDATE_ADDRESS_REQUEST,
    (resolve) =>
      (
        materials: TUpdateAddressMaterials,
        successCallback?: (response: TUpdateAddressResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TUpdateAddressRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EUpdateAddressAction.UPDATE_ADDRESS_SUCCESS,
    (resolve) =>
      (response: TUpdateAddressResponse): TUpdateAddressSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUpdateAddressAction.UPDATE_ADDRESS_FAILED,
    (resolve) =>
      (error: unknown): TUpdateAddressFailed =>
        resolve({ error }),
  ),
};
