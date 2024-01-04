import { TStore } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetStoresMakeupAtHomeParams = unknown;

export type TGetStoresMakeupAtHomeMaterials = {
  params?: TGetStoresMakeupAtHomeParams;
};

export type TGetStoresMakeupAtHomeResponse = TCommonResponse & {
  data: TStore[];
};

// FUNCTION

export const getStoresMakeupAtHome = async ({
  params,
}: TGetStoresMakeupAtHomeMaterials): Promise<TGetStoresMakeupAtHomeResponse> => {
  const response = await ApiService.get(`/store/makeup-at-home`, { params });
  return response?.data;
};
