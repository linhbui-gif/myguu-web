import { createActionCreator } from 'deox';

import {
  TGetStoresByCategoryMaterials,
  TGetStoresByCategoryResponse,
} from '@/services/api/store/get-stores-by-category';

// CONSTANTS

export enum EGetStoresByCategoryAction {
  GET_STORES_BY_CATEGORY = 'GET_STORES_BY_CATEGORY',
  GET_STORES_BY_CATEGORY_REQUEST = 'GET_STORES_BY_CATEGORY_REQUEST',
  GET_STORES_BY_CATEGORY_SUCCESS = 'GET_STORES_BY_CATEGORY_SUCCESS',
  GET_STORES_BY_CATEGORY_FAILED = 'GET_STORES_BY_CATEGORY_FAILED',
}

// TYPES

export type TGetStoresByCategoryRequest = {
  type: EGetStoresByCategoryAction.GET_STORES_BY_CATEGORY_REQUEST;
  payload: {
    materials: TGetStoresByCategoryMaterials;
    successCallback?: (response: TGetStoresByCategoryResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetStoresByCategorySuccess = {
  type: EGetStoresByCategoryAction.GET_STORES_BY_CATEGORY_SUCCESS;
  payload: { response: TGetStoresByCategoryResponse };
};

export type TGetStoresByCategoryFailed = { type: EGetStoresByCategoryAction.GET_STORES_BY_CATEGORY_FAILED };

// FUNCTION

export const getStoresByCategoryAction = {
  request: createActionCreator(
    EGetStoresByCategoryAction.GET_STORES_BY_CATEGORY_REQUEST,
    (resolve) =>
      (
        materials: TGetStoresByCategoryMaterials,
        successCallback?: (response: TGetStoresByCategoryResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetStoresByCategoryRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetStoresByCategoryAction.GET_STORES_BY_CATEGORY_SUCCESS,
    (resolve) =>
      (response: TGetStoresByCategoryResponse): TGetStoresByCategorySuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetStoresByCategoryAction.GET_STORES_BY_CATEGORY_FAILED,
    (resolve) =>
      (error: unknown): TGetStoresByCategoryFailed =>
        resolve({ error }),
  ),
};
