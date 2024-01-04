import { createActionCreator } from 'deox';

import {
  TGetServicesProposeForYouMaterials,
  TGetServicesProposeForYouResponse,
} from '@/services/api/service/get-services-propose-for-you';

// CONSTANTS

export enum EGetServicesProposeForYouAction {
  GET_SERVICES_PROPOSE_FOR_YOU = 'GET_SERVICES_PROPOSE_FOR_YOU',
  GET_SERVICES_PROPOSE_FOR_YOU_REQUEST = 'GET_SERVICES_PROPOSE_FOR_YOU_REQUEST',
  GET_SERVICES_PROPOSE_FOR_YOU_SUCCESS = 'GET_SERVICES_PROPOSE_FOR_YOU_SUCCESS',
  GET_SERVICES_PROPOSE_FOR_YOU_FAILED = 'GET_SERVICES_PROPOSE_FOR_YOU_FAILED',
}

// TYPES

export type TGetServicesProposeForYouRequest = {
  type: EGetServicesProposeForYouAction.GET_SERVICES_PROPOSE_FOR_YOU_REQUEST;
  payload: {
    materials: TGetServicesProposeForYouMaterials;
    successCallback?: (response: TGetServicesProposeForYouResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetServicesProposeForYouSuccess = {
  type: EGetServicesProposeForYouAction.GET_SERVICES_PROPOSE_FOR_YOU_SUCCESS;
  payload: { response: TGetServicesProposeForYouResponse };
};

export type TGetServicesProposeForYouFailed = {
  type: EGetServicesProposeForYouAction.GET_SERVICES_PROPOSE_FOR_YOU_FAILED;
};

// FUNCTION

export const getServicesProposeForYouAction = {
  request: createActionCreator(
    EGetServicesProposeForYouAction.GET_SERVICES_PROPOSE_FOR_YOU_REQUEST,
    (resolve) =>
      (
        materials: TGetServicesProposeForYouMaterials,
        successCallback?: (response: TGetServicesProposeForYouResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetServicesProposeForYouRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetServicesProposeForYouAction.GET_SERVICES_PROPOSE_FOR_YOU_SUCCESS,
    (resolve) =>
      (response: TGetServicesProposeForYouResponse): TGetServicesProposeForYouSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetServicesProposeForYouAction.GET_SERVICES_PROPOSE_FOR_YOU_FAILED,
    (resolve) =>
      (error: unknown): TGetServicesProposeForYouFailed =>
        resolve({ error }),
  ),
};
