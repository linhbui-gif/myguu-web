import { TStore } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetStorePaths = {
  id: string | number;
};
export type TGetStoreParams = unknown;

export type TGetStoreMaterials = {
  paths?: TGetStorePaths;
  params?: TGetStoreParams;
};

export type TGetStoreResponse = TCommonResponse & {
  data: TStore;
};

// FUNCTION

export const getStore = async ({ paths, params }: TGetStoreMaterials): Promise<TGetStoreResponse> => {
  const response = await ApiService.get(`/store/${paths?.id}`, { params });
  return response?.data;
};
