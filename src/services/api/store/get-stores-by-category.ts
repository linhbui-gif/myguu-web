import { TStore } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetStoresByCategoryParams = unknown;

export type TGetStoresByCategoryBody = {
  page?: number;
  limit?: number;
  category_ids?: number[];
  lat?: number;
  lng?: number;
  filter_vote?: number | string;
  filter_type?: string;
  province_code?: number;
  district_code?: number;
};

export type TGetStoresByCategoryMaterials = {
  params?: TGetStoresByCategoryParams;
  body?: TGetStoresByCategoryBody;
};

export type TGetStoresByCategoryResponse = TCommonResponse & {
  data: TStore[];
};

// FUNCTION

export const getStoresByCategory = async ({
  params,
  body,
}: TGetStoresByCategoryMaterials): Promise<TGetStoresByCategoryResponse> => {
  const response = await ApiService.post(`/store/search-by-category`, body, { params });
  return response?.data;
};
