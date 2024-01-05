import { createActionCreator } from 'deox';

import {
  TGetMyFavouriteStoresMaterials,
  TGetMyFavouriteStoresResponse,
} from '@/services/api/user/get-my-favourite-stores';

// CONSTANTS

export enum EGetMyFavouriteStoresAction {
  GET_MY_FAVOURITE_STORES = 'GET_MY_FAVOURITE_STORES',
  GET_MY_FAVOURITE_STORES_REQUEST = 'GET_MY_FAVOURITE_STORES_REQUEST',
  GET_MY_FAVOURITE_STORES_SUCCESS = 'GET_MY_FAVOURITE_STORES_SUCCESS',
  GET_MY_FAVOURITE_STORES_FAILED = 'GET_MY_FAVOURITE_STORES_FAILED',
}

// TYPES

export type TGetMyFavouriteStoresRequest = {
  type: EGetMyFavouriteStoresAction.GET_MY_FAVOURITE_STORES_REQUEST;
  payload: {
    materials: TGetMyFavouriteStoresMaterials;
    successCallback?: (response: TGetMyFavouriteStoresResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetMyFavouriteStoresSuccess = {
  type: EGetMyFavouriteStoresAction.GET_MY_FAVOURITE_STORES_SUCCESS;
  payload: { response: TGetMyFavouriteStoresResponse };
};

export type TGetMyFavouriteStoresFailed = { type: EGetMyFavouriteStoresAction.GET_MY_FAVOURITE_STORES_FAILED };

// FUNCTION

export const getMyFavouriteStoresAction = {
  request: createActionCreator(
    EGetMyFavouriteStoresAction.GET_MY_FAVOURITE_STORES_REQUEST,
    (resolve) =>
      (
        materials: TGetMyFavouriteStoresMaterials,
        successCallback?: (response: TGetMyFavouriteStoresResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetMyFavouriteStoresRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetMyFavouriteStoresAction.GET_MY_FAVOURITE_STORES_SUCCESS,
    (resolve) =>
      (response: TGetMyFavouriteStoresResponse): TGetMyFavouriteStoresSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetMyFavouriteStoresAction.GET_MY_FAVOURITE_STORES_FAILED,
    (resolve) =>
      (error: unknown): TGetMyFavouriteStoresFailed =>
        resolve({ error }),
  ),
};
