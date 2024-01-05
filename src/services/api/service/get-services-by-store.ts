import { TCategory } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetServicesByStoreParams = {
  store_id?: number;
  page?: number;
  limit?: number;
};

export type TGetServicesByStoreMaterials = {
  params?: TGetServicesByStoreParams;
};

export type TGetServicesByStoreResponse = TCommonResponse & {
  data: TCategory[];
};

// FUNCTION

export const getServicesByStore = async ({
  params,
}: TGetServicesByStoreMaterials): Promise<TGetServicesByStoreResponse> => {
  const response = await ApiService.get(`/service/by-store-id`, { params });
  return response?.data;
};
