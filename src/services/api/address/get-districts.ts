import { TDistrict } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetDistrictsParams = unknown;

export type TGetDistrictsMaterials = {
  params?: TGetDistrictsParams;
};

export type TGetDistrictsResponse = TCommonResponse & {
  data: TDistrict[];
};

// FUNCTION

export const getDistricts = async ({ params }: TGetDistrictsMaterials): Promise<TGetDistrictsResponse> => {
  const response = await ApiService.get(`/address/districts-by-province`, { params });
  return response?.data;
};
