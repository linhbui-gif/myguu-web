import { TStore } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetStoresTrendingParams = unknown;

export type TGetStoresTrendingMaterials = {
  params?: TGetStoresTrendingParams;
};

export type TGetStoresTrendingResponse = TCommonResponse & {
  data: TStore[];
};

// FUNCTION

export const getStoresTrending = async ({
  params,
}: TGetStoresTrendingMaterials): Promise<TGetStoresTrendingResponse> => {
  const response = await ApiService.get(`/store/get-trending`, { params });
  return response?.data;
};
