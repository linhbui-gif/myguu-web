import { TAddressGeoCode } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetAddressGeocodeParams = {
  lat: number;
  lng: number;
};

export type TGetAddressGeocodeMaterials = {
  params?: TGetAddressGeocodeParams;
};

export type TGetAddressGeocodeResponse = TCommonResponse & {
  data: TAddressGeoCode[];
};

// FUNCTION

export const getAddressGeocode = async ({
  params,
}: TGetAddressGeocodeMaterials): Promise<TGetAddressGeocodeResponse> => {
  const response = await ApiService.get(`/address/geocode`, { params });
  return response?.data;
};
