import { createActionCreator } from 'deox';

import {
  TGetStoresProminentPlaceMaterials,
  TGetStoresProminentPlaceResponse,
} from '@/services/api/store/get-stores-prominent-place';

// CONSTANTS

export enum EGetStoresProminentPlaceAction {
  GET_STORES_PROMINENT_PLACE = 'GET_STORES_PROMINENT_PLACE',
  GET_STORES_PROMINENT_PLACE_REQUEST = 'GET_STORES_PROMINENT_PLACE_REQUEST',
  GET_STORES_PROMINENT_PLACE_SUCCESS = 'GET_STORES_PROMINENT_PLACE_SUCCESS',
  GET_STORES_PROMINENT_PLACE_FAILED = 'GET_STORES_PROMINENT_PLACE_FAILED',
}

// TYPES

export type TGetStoresProminentPlaceRequest = {
  type: EGetStoresProminentPlaceAction.GET_STORES_PROMINENT_PLACE_REQUEST;
  payload: {
    materials: TGetStoresProminentPlaceMaterials;
    successCallback?: (response: TGetStoresProminentPlaceResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetStoresProminentPlaceSuccess = {
  type: EGetStoresProminentPlaceAction.GET_STORES_PROMINENT_PLACE_SUCCESS;
  payload: { response: TGetStoresProminentPlaceResponse };
};

export type TGetStoresProminentPlaceFailed = { type: EGetStoresProminentPlaceAction.GET_STORES_PROMINENT_PLACE_FAILED };

// FUNCTION

export const getStoresProminentPlaceAction = {
  request: createActionCreator(
    EGetStoresProminentPlaceAction.GET_STORES_PROMINENT_PLACE_REQUEST,
    (resolve) =>
      (
        materials: TGetStoresProminentPlaceMaterials,
        successCallback?: (response: TGetStoresProminentPlaceResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetStoresProminentPlaceRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetStoresProminentPlaceAction.GET_STORES_PROMINENT_PLACE_SUCCESS,
    (resolve) =>
      (response: TGetStoresProminentPlaceResponse): TGetStoresProminentPlaceSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetStoresProminentPlaceAction.GET_STORES_PROMINENT_PLACE_FAILED,
    (resolve) =>
      (error: unknown): TGetStoresProminentPlaceFailed =>
        resolve({ error }),
  ),
};
