import { createActionCreator } from 'deox';

import { TGetStoreMaterials, TGetStoreResponse } from '@/services/api/store/get-store';

// CONSTANTS

export enum EGetStoreAction {
  GET_STORE = 'GET_STORE',
  GET_STORE_REQUEST = 'GET_STORE_REQUEST',
  GET_STORE_SUCCESS = 'GET_STORE_SUCCESS',
  GET_STORE_FAILED = 'GET_STORE_FAILED',
}

// TYPES

export type TGetStoreRequest = {
  type: EGetStoreAction.GET_STORE_REQUEST;
  payload: {
    materials: TGetStoreMaterials;
    successCallback?: (response: TGetStoreResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetStoreSuccess = {
  type: EGetStoreAction.GET_STORE_SUCCESS;
  payload: { response?: TGetStoreResponse };
};

export type TGetStoreFailed = { type: EGetStoreAction.GET_STORE_FAILED };

// FUNCTION

export const getStoreAction = {
  request: createActionCreator(
    EGetStoreAction.GET_STORE_REQUEST,
    (resolve) =>
      (
        materials: TGetStoreMaterials,
        successCallback?: (response: TGetStoreResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetStoreRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetStoreAction.GET_STORE_SUCCESS,
    (resolve) =>
      (response?: TGetStoreResponse): TGetStoreSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetStoreAction.GET_STORE_FAILED,
    (resolve) =>
      (error: unknown): TGetStoreFailed =>
        resolve({ error }),
  ),
};
