import { createActionCreator } from 'deox';

import { TGetServiceMaterials, TGetServiceResponse } from '@/services/api/service/get-service';

// CONSTANTS

export enum EGetServiceAction {
  GET_SERVICE = 'GET_SERVICE',
  GET_SERVICE_REQUEST = 'GET_SERVICE_REQUEST',
  GET_SERVICE_SUCCESS = 'GET_SERVICE_SUCCESS',
  GET_SERVICE_FAILED = 'GET_SERVICE_FAILED',
}

// TYPES

export type TGetServiceRequest = {
  type: EGetServiceAction.GET_SERVICE_REQUEST;
  payload: {
    materials: TGetServiceMaterials;
    successCallback?: (response: TGetServiceResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetServiceSuccess = {
  type: EGetServiceAction.GET_SERVICE_SUCCESS;
  payload: { response?: TGetServiceResponse };
};

export type TGetServiceFailed = { type: EGetServiceAction.GET_SERVICE_FAILED };

// FUNCTION

export const getServiceAction = {
  request: createActionCreator(
    EGetServiceAction.GET_SERVICE_REQUEST,
    (resolve) =>
      (
        materials: TGetServiceMaterials,
        successCallback?: (response: TGetServiceResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetServiceRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetServiceAction.GET_SERVICE_SUCCESS,
    (resolve) =>
      (response?: TGetServiceResponse): TGetServiceSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetServiceAction.GET_SERVICE_FAILED,
    (resolve) =>
      (error: unknown): TGetServiceFailed =>
        resolve({ error }),
  ),
};
