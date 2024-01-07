import { createActionCreator } from 'deox';

import { TGetStoresTrendingMaterials, TGetStoresTrendingResponse } from '@/services/api/store/get-stores-trending';

// CONSTANTS

export enum EGetStoresTrendingAction {
  GET_STORES_TRENDING = 'GET_STORES_TRENDING',
  GET_STORES_TRENDING_REQUEST = 'GET_STORES_TRENDING_REQUEST',
  GET_STORES_TRENDING_SUCCESS = 'GET_STORES_TRENDING_SUCCESS',
  GET_STORES_TRENDING_FAILED = 'GET_STORES_TRENDING_FAILED',
}

// TYPES

export type TGetStoresTrendingRequest = {
  type: EGetStoresTrendingAction.GET_STORES_TRENDING_REQUEST;
  payload: {
    materials: TGetStoresTrendingMaterials;
    successCallback?: (response: TGetStoresTrendingResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetStoresTrendingSuccess = {
  type: EGetStoresTrendingAction.GET_STORES_TRENDING_SUCCESS;
  payload: { response: TGetStoresTrendingResponse };
};

export type TGetStoresTrendingFailed = { type: EGetStoresTrendingAction.GET_STORES_TRENDING_FAILED };

// FUNCTION

export const getStoresTrendingAction = {
  request: createActionCreator(
    EGetStoresTrendingAction.GET_STORES_TRENDING_REQUEST,
    (resolve) =>
      (
        materials: TGetStoresTrendingMaterials,
        successCallback?: (response: TGetStoresTrendingResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetStoresTrendingRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetStoresTrendingAction.GET_STORES_TRENDING_SUCCESS,
    (resolve) =>
      (response: TGetStoresTrendingResponse): TGetStoresTrendingSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetStoresTrendingAction.GET_STORES_TRENDING_FAILED,
    (resolve) =>
      (error: unknown): TGetStoresTrendingFailed =>
        resolve({ error }),
  ),
};
