import { createActionCreator } from 'deox';

import {
  TGetStoresMakeupAtHomeMaterials,
  TGetStoresMakeupAtHomeResponse,
} from '@/services/api/store/get-stores-makeup-at-home';

// CONSTANTS

export enum EGetStoresMakeupAtHomeAction {
  GET_STORES_MAKEUP_AT_HOME = 'GET_STORES_MAKEUP_AT_HOME',
  GET_STORES_MAKEUP_AT_HOME_REQUEST = 'GET_STORES_MAKEUP_AT_HOME_REQUEST',
  GET_STORES_MAKEUP_AT_HOME_SUCCESS = 'GET_STORES_MAKEUP_AT_HOME_SUCCESS',
  GET_STORES_MAKEUP_AT_HOME_FAILED = 'GET_STORES_MAKEUP_AT_HOME_FAILED',
}

// TYPES

export type TGetStoresMakeupAtHomeRequest = {
  type: EGetStoresMakeupAtHomeAction.GET_STORES_MAKEUP_AT_HOME_REQUEST;
  payload: {
    materials: TGetStoresMakeupAtHomeMaterials;
    successCallback?: (response: TGetStoresMakeupAtHomeResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetStoresMakeupAtHomeSuccess = {
  type: EGetStoresMakeupAtHomeAction.GET_STORES_MAKEUP_AT_HOME_SUCCESS;
  payload: { response: TGetStoresMakeupAtHomeResponse };
};

export type TGetStoresMakeupAtHomeFailed = { type: EGetStoresMakeupAtHomeAction.GET_STORES_MAKEUP_AT_HOME_FAILED };

// FUNCTION

export const getStoresMakeupAtHomeAction = {
  request: createActionCreator(
    EGetStoresMakeupAtHomeAction.GET_STORES_MAKEUP_AT_HOME_REQUEST,
    (resolve) =>
      (
        materials: TGetStoresMakeupAtHomeMaterials,
        successCallback?: (response: TGetStoresMakeupAtHomeResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetStoresMakeupAtHomeRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetStoresMakeupAtHomeAction.GET_STORES_MAKEUP_AT_HOME_SUCCESS,
    (resolve) =>
      (response: TGetStoresMakeupAtHomeResponse): TGetStoresMakeupAtHomeSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetStoresMakeupAtHomeAction.GET_STORES_MAKEUP_AT_HOME_FAILED,
    (resolve) =>
      (error: unknown): TGetStoresMakeupAtHomeFailed =>
        resolve({ error }),
  ),
};
