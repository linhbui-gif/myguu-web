import { createActionCreator } from 'deox';

import { TGetStoreAlbumsMaterials, TGetStoreAlbumsResponse } from '@/services/api/store/get-store-albums';

// CONSTANTS

export enum EGetStoreAlbumsAction {
  GET_STORE_ALBUMS = 'GET_STORE_ALBUMS',
  GET_STORE_ALBUMS_REQUEST = 'GET_STORE_ALBUMS_REQUEST',
  GET_STORE_ALBUMS_SUCCESS = 'GET_STORE_ALBUMS_SUCCESS',
  GET_STORE_ALBUMS_FAILED = 'GET_STORE_ALBUMS_FAILED',
}

// TYPES

export type TGetStoreAlbumsRequest = {
  type: EGetStoreAlbumsAction.GET_STORE_ALBUMS_REQUEST;
  payload: {
    materials: TGetStoreAlbumsMaterials;
    successCallback?: (response: TGetStoreAlbumsResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetStoreAlbumsSuccess = {
  type: EGetStoreAlbumsAction.GET_STORE_ALBUMS_SUCCESS;
  payload: { response: TGetStoreAlbumsResponse };
};

export type TGetStoreAlbumsFailed = { type: EGetStoreAlbumsAction.GET_STORE_ALBUMS_FAILED };

// FUNCTION

export const getStoreAlbumsAction = {
  request: createActionCreator(
    EGetStoreAlbumsAction.GET_STORE_ALBUMS_REQUEST,
    (resolve) =>
      (
        materials: TGetStoreAlbumsMaterials,
        successCallback?: (response: TGetStoreAlbumsResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetStoreAlbumsRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetStoreAlbumsAction.GET_STORE_ALBUMS_SUCCESS,
    (resolve) =>
      (response: TGetStoreAlbumsResponse): TGetStoreAlbumsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetStoreAlbumsAction.GET_STORE_ALBUMS_FAILED,
    (resolve) =>
      (error: unknown): TGetStoreAlbumsFailed =>
        resolve({ error }),
  ),
};
