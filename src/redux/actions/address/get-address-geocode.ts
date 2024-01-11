import { createActionCreator } from 'deox';

import { TGetAddressGeocodeMaterials, TGetAddressGeocodeResponse } from '@/services/api/address/get-address-geocode';

// CONSTANTS

export enum EGetAddressGeocodeAction {
  GET_ADDRESS_GEOCODE = 'GET_ADDRESS_GEOCODE',
  GET_ADDRESS_GEOCODE_REQUEST = 'GET_ADDRESS_GEOCODE_REQUEST',
  GET_ADDRESS_GEOCODE_SUCCESS = 'GET_ADDRESS_GEOCODE_SUCCESS',
  GET_ADDRESS_GEOCODE_FAILED = 'GET_ADDRESS_GEOCODE_FAILED',
}

// TYPES

export type TGetAddressGeocodeRequest = {
  type: EGetAddressGeocodeAction.GET_ADDRESS_GEOCODE_REQUEST;
  payload: {
    materials: TGetAddressGeocodeMaterials;
    successCallback?: (response: TGetAddressGeocodeResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetAddressGeocodeSuccess = {
  type: EGetAddressGeocodeAction.GET_ADDRESS_GEOCODE_SUCCESS;
  payload: { response: TGetAddressGeocodeResponse };
};

export type TGetAddressGeocodeFailed = { type: EGetAddressGeocodeAction.GET_ADDRESS_GEOCODE_FAILED };

// FUNCTION

export const getAddressGeocodeAction = {
  request: createActionCreator(
    EGetAddressGeocodeAction.GET_ADDRESS_GEOCODE_REQUEST,
    (resolve) =>
      (
        materials: TGetAddressGeocodeMaterials,
        successCallback?: (response: TGetAddressGeocodeResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetAddressGeocodeRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetAddressGeocodeAction.GET_ADDRESS_GEOCODE_SUCCESS,
    (resolve) =>
      (response: TGetAddressGeocodeResponse): TGetAddressGeocodeSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetAddressGeocodeAction.GET_ADDRESS_GEOCODE_FAILED,
    (resolve) =>
      (error: unknown): TGetAddressGeocodeFailed =>
        resolve({ error }),
  ),
};
