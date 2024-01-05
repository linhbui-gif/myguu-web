import { createActionCreator } from 'deox';

import { TGetProvincesMaterials, TGetProvincesResponse } from '@/services/api/address/get-provinces';

// CONSTANTS

export enum EGetProvincesAction {
  GET_PROVINCES = 'GET_PROVINCES',
  GET_PROVINCES_REQUEST = 'GET_PROVINCES_REQUEST',
  GET_PROVINCES_SUCCESS = 'GET_PROVINCES_SUCCESS',
  GET_PROVINCES_FAILED = 'GET_PROVINCES_FAILED',
}

// TYPES

export type TGetProvincesRequest = {
  type: EGetProvincesAction.GET_PROVINCES_REQUEST;
  payload: {
    materials: TGetProvincesMaterials;
    successCallback?: (response: TGetProvincesResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetProvincesSuccess = {
  type: EGetProvincesAction.GET_PROVINCES_SUCCESS;
  payload: { response: TGetProvincesResponse };
};

export type TGetProvincesFailed = { type: EGetProvincesAction.GET_PROVINCES_FAILED };

// FUNCTION

export const getProvincesAction = {
  request: createActionCreator(
    EGetProvincesAction.GET_PROVINCES_REQUEST,
    (resolve) =>
      (
        materials: TGetProvincesMaterials,
        successCallback?: (response: TGetProvincesResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetProvincesRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetProvincesAction.GET_PROVINCES_SUCCESS,
    (resolve) =>
      (response: TGetProvincesResponse): TGetProvincesSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetProvincesAction.GET_PROVINCES_FAILED,
    (resolve) =>
      (error: unknown): TGetProvincesFailed =>
        resolve({ error }),
  ),
};
