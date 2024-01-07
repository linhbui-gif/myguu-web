import { TStore } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetStoresBySearchParams = unknown;
export type TGetStoresBySearchBody = {
  page?: number;
  limit?: number;
  category_ids?: number[];
  lat?: number;
  lng?: number;
  filter_vote?: number | string;
  filter_type?: string;
  province_code?: number;
  district_code?: number;
  search_store?: string;
};

export type TGetStoresBySearchMaterials = {
  params?: TGetStoresBySearchParams;
  body?: TGetStoresBySearchBody;
};

export type TGetStoresBySearchResponse = TCommonResponse & {
  data: TStore[];
};

// FUNCTION

export const getStoresBySearch = async ({
  params,
  body,
}: TGetStoresBySearchMaterials): Promise<TGetStoresBySearchResponse> => {
  const response = await ApiService.post(`/store/search`, body, { params });
  return response?.data;
};
