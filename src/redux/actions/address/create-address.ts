import { createActionCreator } from 'deox';

import { TCreateAddressMaterials, TCreateAddressResponse } from '@/services/api/address/create-address';

// CONSTANTS

export enum ECreateAddressAction {
  CREATE_ADDRESS = 'CREATE_ADDRESS',
  CREATE_ADDRESS_REQUEST = 'CREATE_ADDRESS_REQUEST',
  CREATE_ADDRESS_SUCCESS = 'CREATE_ADDRESS_SUCCESS',
  CREATE_ADDRESS_FAILED = 'CREATE_ADDRESS_FAILED',
}

// TYPES

export type TCreateAddressRequest = {
  type: ECreateAddressAction.CREATE_ADDRESS_REQUEST;
  payload: {
    materials: TCreateAddressMaterials;
    successCallback?: (response: TCreateAddressResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TCreateAddressSuccess = {
  type: ECreateAddressAction.CREATE_ADDRESS_SUCCESS;
  payload: { response: TCreateAddressResponse };
};

export type TCreateAddressFailed = { type: ECreateAddressAction.CREATE_ADDRESS_FAILED };

// FUNCTION

export const createAddressAction = {
  request: createActionCreator(
    ECreateAddressAction.CREATE_ADDRESS_REQUEST,
    (resolve) =>
      (
        materials: TCreateAddressMaterials,
        successCallback?: (response: TCreateAddressResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TCreateAddressRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    ECreateAddressAction.CREATE_ADDRESS_SUCCESS,
    (resolve) =>
      (response: TCreateAddressResponse): TCreateAddressSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ECreateAddressAction.CREATE_ADDRESS_FAILED,
    (resolve) =>
      (error: unknown): TCreateAddressFailed =>
        resolve({ error }),
  ),
};
