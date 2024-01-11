import { TStore } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetStoresProminentPlaceParams = {
  page?: number;
  limit?: number;
  category_id?: number;
  lat?: number;
  lng?: number;
};

export type TGetStoresProminentPlaceMaterials = {
  params?: TGetStoresProminentPlaceParams;
};

export type TGetStoresProminentPlaceResponse = TCommonResponse & {
  data: TStore[];
};

// FUNCTION

export const getStoresProminentPlace = async ({
  params,
}: TGetStoresProminentPlaceMaterials): Promise<TGetStoresProminentPlaceResponse> => {
  const response = await ApiService.get(`/store/prominent-place`, { params });
  return response?.data;
};
