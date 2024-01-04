import { createActionCreator } from 'deox';

import {
  TGetServicesDealHotMaterials,
  TGetServicesDealHotResponse,
} from '@/services/api/service/get-services-deal-hot';

// CONSTANTS

export enum EGetServicesDealHotAction {
  GET_SERVICES_DEAL_HOT = 'GET_SERVICES_DEAL_HOT',
  GET_SERVICES_DEAL_HOT_REQUEST = 'GET_SERVICES_DEAL_HOT_REQUEST',
  GET_SERVICES_DEAL_HOT_SUCCESS = 'GET_SERVICES_DEAL_HOT_SUCCESS',
  GET_SERVICES_DEAL_HOT_FAILED = 'GET_SERVICES_DEAL_HOT_FAILED',
}

// TYPES

export type TGetServicesDealHotRequest = {
  type: EGetServicesDealHotAction.GET_SERVICES_DEAL_HOT_REQUEST;
  payload: {
    materials: TGetServicesDealHotMaterials;
    successCallback?: (response: TGetServicesDealHotResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetServicesDealHotSuccess = {
  type: EGetServicesDealHotAction.GET_SERVICES_DEAL_HOT_SUCCESS;
  payload: { response: TGetServicesDealHotResponse };
};

export type TGetServicesDealHotFailed = { type: EGetServicesDealHotAction.GET_SERVICES_DEAL_HOT_FAILED };

// FUNCTION

export const getServicesDealHotAction = {
  request: createActionCreator(
    EGetServicesDealHotAction.GET_SERVICES_DEAL_HOT_REQUEST,
    (resolve) =>
      (
        materials: TGetServicesDealHotMaterials,
        successCallback?: (response: TGetServicesDealHotResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetServicesDealHotRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetServicesDealHotAction.GET_SERVICES_DEAL_HOT_SUCCESS,
    (resolve) =>
      (response: TGetServicesDealHotResponse): TGetServicesDealHotSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetServicesDealHotAction.GET_SERVICES_DEAL_HOT_FAILED,
    (resolve) =>
      (error: unknown): TGetServicesDealHotFailed =>
        resolve({ error }),
  ),
};
