import { createActionCreator } from 'deox';

import { TGetDistrictsMaterials, TGetDistrictsResponse } from '@/services/api/address/get-districts';

// CONSTANTS

export enum EGetDistrictsAction {
  GET_DISTRICTS = 'GET_DISTRICTS',
  GET_DISTRICTS_REQUEST = 'GET_DISTRICTS_REQUEST',
  GET_DISTRICTS_SUCCESS = 'GET_DISTRICTS_SUCCESS',
  GET_DISTRICTS_FAILED = 'GET_DISTRICTS_FAILED',
}

// TYPES

export type TGetDistrictsRequest = {
  type: EGetDistrictsAction.GET_DISTRICTS_REQUEST;
  payload: {
    materials: TGetDistrictsMaterials;
    successCallback?: (response: TGetDistrictsResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetDistrictsSuccess = {
  type: EGetDistrictsAction.GET_DISTRICTS_SUCCESS;
  payload: { response?: TGetDistrictsResponse };
};

export type TGetDistrictsFailed = { type: EGetDistrictsAction.GET_DISTRICTS_FAILED };

// FUNCTION

export const getDistrictsAction = {
  request: createActionCreator(
    EGetDistrictsAction.GET_DISTRICTS_REQUEST,
    (resolve) =>
      (
        materials: TGetDistrictsMaterials,
        successCallback?: (response: TGetDistrictsResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetDistrictsRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetDistrictsAction.GET_DISTRICTS_SUCCESS,
    (resolve) =>
      (response?: TGetDistrictsResponse): TGetDistrictsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetDistrictsAction.GET_DISTRICTS_FAILED,
    (resolve) =>
      (error: unknown): TGetDistrictsFailed =>
        resolve({ error }),
  ),
};
