import { createActionCreator } from 'deox';

import {
  TGetMyFavouriteServicesMaterials,
  TGetMyFavouriteServicesResponse,
} from '@/services/api/user/get-my-favourite-services';

// CONSTANTS

export enum EGetMyFavouriteServicesAction {
  GET_MY_FAVOURITE_SERVICES = 'GET_MY_FAVOURITE_SERVICES',
  GET_MY_FAVOURITE_SERVICES_REQUEST = 'GET_MY_FAVOURITE_SERVICES_REQUEST',
  GET_MY_FAVOURITE_SERVICES_SUCCESS = 'GET_MY_FAVOURITE_SERVICES_SUCCESS',
  GET_MY_FAVOURITE_SERVICES_FAILED = 'GET_MY_FAVOURITE_SERVICES_FAILED',
}

// TYPES

export type TGetMyFavouriteServicesRequest = {
  type: EGetMyFavouriteServicesAction.GET_MY_FAVOURITE_SERVICES_REQUEST;
  payload: {
    materials: TGetMyFavouriteServicesMaterials;
    successCallback?: (response: TGetMyFavouriteServicesResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetMyFavouriteServicesSuccess = {
  type: EGetMyFavouriteServicesAction.GET_MY_FAVOURITE_SERVICES_SUCCESS;
  payload: { response: TGetMyFavouriteServicesResponse };
};

export type TGetMyFavouriteServicesFailed = { type: EGetMyFavouriteServicesAction.GET_MY_FAVOURITE_SERVICES_FAILED };

// FUNCTION

export const getMyFavouriteServicesAction = {
  request: createActionCreator(
    EGetMyFavouriteServicesAction.GET_MY_FAVOURITE_SERVICES_REQUEST,
    (resolve) =>
      (
        materials: TGetMyFavouriteServicesMaterials,
        successCallback?: (response: TGetMyFavouriteServicesResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetMyFavouriteServicesRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetMyFavouriteServicesAction.GET_MY_FAVOURITE_SERVICES_SUCCESS,
    (resolve) =>
      (response: TGetMyFavouriteServicesResponse): TGetMyFavouriteServicesSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetMyFavouriteServicesAction.GET_MY_FAVOURITE_SERVICES_FAILED,
    (resolve) =>
      (error: unknown): TGetMyFavouriteServicesFailed =>
        resolve({ error }),
  ),
};
