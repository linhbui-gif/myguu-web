import { createActionCreator } from 'deox';

import { TGetBannersMaterials, TGetBannersResponse } from '@/services/api/banner/get-banners';

// CONSTANTS

export enum EGetBannersAction {
  GET_BANNERS = 'GET_BANNERS',
  GET_BANNERS_REQUEST = 'GET_BANNERS_REQUEST',
  GET_BANNERS_SUCCESS = 'GET_BANNERS_SUCCESS',
  GET_BANNERS_FAILED = 'GET_BANNERS_FAILED',
}

// TYPES

export type TGetBannersRequest = {
  type: EGetBannersAction.GET_BANNERS_REQUEST;
  payload: {
    materials: TGetBannersMaterials;
    successCallback?: (response: TGetBannersResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetBannersSuccess = {
  type: EGetBannersAction.GET_BANNERS_SUCCESS;
  payload: { response: TGetBannersResponse };
};

export type TGetBannersFailed = { type: EGetBannersAction.GET_BANNERS_FAILED };

// FUNCTION

export const getBannersAction = {
  request: createActionCreator(
    EGetBannersAction.GET_BANNERS_REQUEST,
    (resolve) =>
      (
        materials: TGetBannersMaterials,
        successCallback?: (response: TGetBannersResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetBannersRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetBannersAction.GET_BANNERS_SUCCESS,
    (resolve) =>
      (response: TGetBannersResponse): TGetBannersSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetBannersAction.GET_BANNERS_FAILED,
    (resolve) =>
      (error: unknown): TGetBannersFailed =>
        resolve({ error }),
  ),
};
