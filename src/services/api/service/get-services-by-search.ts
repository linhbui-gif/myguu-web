import { TService } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetServicesBySearchParams = unknown;
export type TGetServicesBySearchBody = unknown;

export type TGetServicesBySearchMaterials = {
  params?: TGetServicesBySearchParams;
  body?: TGetServicesBySearchBody;
};

export type TGetServicesBySearchResponse = TCommonResponse & {
  data: TService[];
};

// FUNCTION

export const getServicesBySearch = async ({
  params,
  body,
}: TGetServicesBySearchMaterials): Promise<TGetServicesBySearchResponse> => {
  const response = await ApiService.post(`/service/search`, body, { params });
  return response?.data;
};
