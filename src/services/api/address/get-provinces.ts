import { TProvince } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetProvincesParams = unknown;

export type TGetProvincesMaterials = {
  params?: TGetProvincesParams;
};

export type TGetProvincesResponse = TCommonResponse & {
  data: TProvince[];
};

// FUNCTION

export const getProvinces = async ({ params }: TGetProvincesMaterials): Promise<TGetProvincesResponse> => {
  const response = await ApiService.get(`/address/provinces`, { params });
  return response?.data;
};
