import { createActionCreator } from 'deox';

import { TGetStoresBySearchMaterials, TGetStoresBySearchResponse } from '@/services/api/store/get-stores-by-search';

// CONSTANTS

export enum EGetStoresBySearchAction {
  GET_STORES_BY_SEARCH = 'GET_STORES_BY_SEARCH',
  GET_STORES_BY_SEARCH_REQUEST = 'GET_STORES_BY_SEARCH_REQUEST',
  GET_STORES_BY_SEARCH_SUCCESS = 'GET_STORES_BY_SEARCH_SUCCESS',
  GET_STORES_BY_SEARCH_FAILED = 'GET_STORES_BY_SEARCH_FAILED',
}

// TYPES

export type TGetStoresBySearchRequest = {
  type: EGetStoresBySearchAction.GET_STORES_BY_SEARCH_REQUEST;
  payload: {
    materials: TGetStoresBySearchMaterials;
    successCallback?: (response: TGetStoresBySearchResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetStoresBySearchSuccess = {
  type: EGetStoresBySearchAction.GET_STORES_BY_SEARCH_SUCCESS;
  payload: { response: TGetStoresBySearchResponse };
};

export type TGetStoresBySearchFailed = { type: EGetStoresBySearchAction.GET_STORES_BY_SEARCH_FAILED };

// FUNCTION

export const getStoresBySearchAction = {
  request: createActionCreator(
    EGetStoresBySearchAction.GET_STORES_BY_SEARCH_REQUEST,
    (resolve) =>
      (
        materials: TGetStoresBySearchMaterials,
        successCallback?: (response: TGetStoresBySearchResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetStoresBySearchRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetStoresBySearchAction.GET_STORES_BY_SEARCH_SUCCESS,
    (resolve) =>
      (response: TGetStoresBySearchResponse): TGetStoresBySearchSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetStoresBySearchAction.GET_STORES_BY_SEARCH_FAILED,
    (resolve) =>
      (error: unknown): TGetStoresBySearchFailed =>
        resolve({ error }),
  ),
};
