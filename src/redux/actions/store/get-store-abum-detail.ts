import { createActionCreator } from 'deox';

import { TGetStoreAlbumByIdMaterials, TGetStoreAlbumByIdResponse } from '@/services/api/store/get-store-abum-detail';

// CONSTANTS

export enum EGetStoreAlbumByIdAction {
  GET_STORE_ALBUM_BY_ID = 'GET_STORE_ALBUM_BY_ID',
  GET_STORE_ALBUM_BY_ID_REQUEST = 'GET_STORE_ALBUM_BY_ID_REQUEST',
  GET_STORE_ALBUM_BY_ID_SUCCESS = 'GET_STORE_ALBUM_BY_ID_SUCCESS',
  GET_STORE_ALBUM_BY_ID_FAILED = 'GET_STORE_ALBUM_BY_ID_FAILED',
}

// TYPES

export type TGetStoreAlbumByIdRequest = {
  type: EGetStoreAlbumByIdAction.GET_STORE_ALBUM_BY_ID_REQUEST;
  payload: {
    materials: TGetStoreAlbumByIdMaterials;
    successCallback?: (response: TGetStoreAlbumByIdResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetStoreAlbumByIdSuccess = {
  type: EGetStoreAlbumByIdAction.GET_STORE_ALBUM_BY_ID_SUCCESS;
  payload: { response: TGetStoreAlbumByIdResponse };
};

export type TGetStoreAlbumByIdFailed = { type: EGetStoreAlbumByIdAction.GET_STORE_ALBUM_BY_ID_FAILED };

// FUNCTION

export const GetStoreAlbumByIdAction = {
  request: createActionCreator(
    EGetStoreAlbumByIdAction.GET_STORE_ALBUM_BY_ID_REQUEST,
    (resolve) =>
      (
        materials: TGetStoreAlbumByIdMaterials,
        successCallback?: (response: TGetStoreAlbumByIdResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetStoreAlbumByIdRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetStoreAlbumByIdAction.GET_STORE_ALBUM_BY_ID_SUCCESS,
    (resolve) =>
      (response: TGetStoreAlbumByIdResponse): TGetStoreAlbumByIdSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetStoreAlbumByIdAction.GET_STORE_ALBUM_BY_ID_FAILED,
    (resolve) =>
      (error: unknown): TGetStoreAlbumByIdFailed =>
        resolve({ error }),
  ),
};
