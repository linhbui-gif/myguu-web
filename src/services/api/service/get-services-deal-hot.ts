import { TService } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetServicesDealHotParams = unknown;

export type TGetServicesDealHotMaterials = {
  params?: TGetServicesDealHotParams;
};

export type TGetServicesDealHotResponse = TCommonResponse & {
  data: TService[];
};

// FUNCTION

export const getServicesDealHot = async ({
  params,
}: TGetServicesDealHotMaterials): Promise<TGetServicesDealHotResponse> => {
  const response = await ApiService.get(`/service/deal-hot`, { params });
  return response?.data;
};
