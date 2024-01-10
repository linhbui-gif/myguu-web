import { createActionCreator } from 'deox';

import {
  TGetServicesBySearchMaterials,
  TGetServicesBySearchResponse,
} from '@/services/api/service/get-services-by-search';

// CONSTANTS

export enum EGetServicesBySearchAction {
  GET_SERVICES_BY_SEARCH = 'GET_SERVICES_BY_SEARCH',
  GET_SERVICES_BY_SEARCH_REQUEST = 'GET_SERVICES_BY_SEARCH_REQUEST',
  GET_SERVICES_BY_SEARCH_SUCCESS = 'GET_SERVICES_BY_SEARCH_SUCCESS',
  GET_SERVICES_BY_SEARCH_FAILED = 'GET_SERVICES_BY_SEARCH_FAILED',
}

// TYPES

export type TGetServicesBySearchRequest = {
  type: EGetServicesBySearchAction.GET_SERVICES_BY_SEARCH_REQUEST;
  payload: {
    materials: TGetServicesBySearchMaterials;
    successCallback?: (response: TGetServicesBySearchResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetServicesBySearchSuccess = {
  type: EGetServicesBySearchAction.GET_SERVICES_BY_SEARCH_SUCCESS;
  payload: { response: TGetServicesBySearchResponse };
};

export type TGetServicesBySearchFailed = { type: EGetServicesBySearchAction.GET_SERVICES_BY_SEARCH_FAILED };

// FUNCTION

export const getServicesBySearchAction = {
  request: createActionCreator(
    EGetServicesBySearchAction.GET_SERVICES_BY_SEARCH_REQUEST,
    (resolve) =>
      (
        materials: TGetServicesBySearchMaterials,
        successCallback?: (response: TGetServicesBySearchResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetServicesBySearchRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetServicesBySearchAction.GET_SERVICES_BY_SEARCH_SUCCESS,
    (resolve) =>
      (response: TGetServicesBySearchResponse): TGetServicesBySearchSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetServicesBySearchAction.GET_SERVICES_BY_SEARCH_FAILED,
    (resolve) =>
      (error: unknown): TGetServicesBySearchFailed =>
        resolve({ error }),
  ),
};
