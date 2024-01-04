import { createActionCreator } from 'deox';

import { TGetStoresNearByMaterials, TGetStoresNearByResponse } from '@/services/api/store/get-stores-near-by';

// CONSTANTS

export enum EGetStoresNearByAction {
  GET_STORES_NEAR_BY = 'GET_STORES_NEAR_BY',
  GET_STORES_NEAR_BY_REQUEST = 'GET_STORES_NEAR_BY_REQUEST',
  GET_STORES_NEAR_BY_SUCCESS = 'GET_STORES_NEAR_BY_SUCCESS',
  GET_STORES_NEAR_BY_FAILED = 'GET_STORES_NEAR_BY_FAILED',
}

// TYPES

export type TGetStoresNearByRequest = {
  type: EGetStoresNearByAction.GET_STORES_NEAR_BY_REQUEST;
  payload: {
    materials: TGetStoresNearByMaterials;
    successCallback?: (response: TGetStoresNearByResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetStoresNearBySuccess = {
  type: EGetStoresNearByAction.GET_STORES_NEAR_BY_SUCCESS;
  payload: { response: TGetStoresNearByResponse };
};

export type TGetStoresNearByFailed = { type: EGetStoresNearByAction.GET_STORES_NEAR_BY_FAILED };

// FUNCTION

export const getStoresNearByAction = {
  request: createActionCreator(
    EGetStoresNearByAction.GET_STORES_NEAR_BY_REQUEST,
    (resolve) =>
      (
        materials: TGetStoresNearByMaterials,
        successCallback?: (response: TGetStoresNearByResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetStoresNearByRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetStoresNearByAction.GET_STORES_NEAR_BY_SUCCESS,
    (resolve) =>
      (response: TGetStoresNearByResponse): TGetStoresNearBySuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetStoresNearByAction.GET_STORES_NEAR_BY_FAILED,
    (resolve) =>
      (error: unknown): TGetStoresNearByFailed =>
        resolve({ error }),
  ),
};
