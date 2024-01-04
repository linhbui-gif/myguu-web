import { createActionCreator } from 'deox';

import {
  TGetServicesByStoreMaterials,
  TGetServicesByStoreResponse,
} from '@/services/api/service/get-services-by-store';

// CONSTANTS

export enum EGetServicesByStoreAction {
  GET_SERVICES_BY_STORE = 'GET_SERVICES_BY_STORE',
  GET_SERVICES_BY_STORE_REQUEST = 'GET_SERVICES_BY_STORE_REQUEST',
  GET_SERVICES_BY_STORE_SUCCESS = 'GET_SERVICES_BY_STORE_SUCCESS',
  GET_SERVICES_BY_STORE_FAILED = 'GET_SERVICES_BY_STORE_FAILED',
}

// TYPES

export type TGetServicesByStoreRequest = {
  type: EGetServicesByStoreAction.GET_SERVICES_BY_STORE_REQUEST;
  payload: {
    materials: TGetServicesByStoreMaterials;
    successCallback?: (response: TGetServicesByStoreResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetServicesByStoreSuccess = {
  type: EGetServicesByStoreAction.GET_SERVICES_BY_STORE_SUCCESS;
  payload: { response: TGetServicesByStoreResponse };
};

export type TGetServicesByStoreFailed = { type: EGetServicesByStoreAction.GET_SERVICES_BY_STORE_FAILED };

// FUNCTION

export const getServicesByStoreAction = {
  request: createActionCreator(
    EGetServicesByStoreAction.GET_SERVICES_BY_STORE_REQUEST,
    (resolve) =>
      (
        materials: TGetServicesByStoreMaterials,
        successCallback?: (response: TGetServicesByStoreResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetServicesByStoreRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetServicesByStoreAction.GET_SERVICES_BY_STORE_SUCCESS,
    (resolve) =>
      (response: TGetServicesByStoreResponse): TGetServicesByStoreSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetServicesByStoreAction.GET_SERVICES_BY_STORE_FAILED,
    (resolve) =>
      (error: unknown): TGetServicesByStoreFailed =>
        resolve({ error }),
  ),
};
