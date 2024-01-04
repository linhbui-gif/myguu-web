import { TService } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetServicePaths = {
  id: string | number;
};
export type TGetServiceParams = unknown;

export type TGetServiceMaterials = {
  paths?: TGetServicePaths;
  params?: TGetServiceParams;
};

export type TGetServiceResponse = TCommonResponse & {
  data: TService;
};

// FUNCTION

export const getService = async ({ paths, params }: TGetServiceMaterials): Promise<TGetServiceResponse> => {
  const response = await ApiService.get(`/service/${paths?.id}`, { params });
  return response?.data;
};
