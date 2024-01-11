import { TStore } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetStoresNearByParams = {
  page?: number;
  limit?: number;
  category_id?: string | number;
  lat?: number;
  lng?: number;
};

export type TGetStoresNearByMaterials = {
  params?: TGetStoresNearByParams;
};

export type TGetStoresNearByResponse = TCommonResponse & {
  data: TStore[];
};

// FUNCTION

export const getStoresNearBy = async ({ params }: TGetStoresNearByMaterials): Promise<TGetStoresNearByResponse> => {
  const response = await ApiService.get(`/store/near-you`, { params });
  return response?.data;
};
