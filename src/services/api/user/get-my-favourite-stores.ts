import { TStore } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetMyFavouriteStoresParams = unknown;

export type TGetMyFavouriteStoresMaterials = {
  params?: TGetMyFavouriteStoresParams;
};

export type TGetMyFavouriteStoresResponse = TCommonResponse & {
  data: TStore[];
};

// FUNCTION

export const getMyFavouriteStores = async ({
  params,
}: TGetMyFavouriteStoresMaterials): Promise<TGetMyFavouriteStoresResponse> => {
  const response = await ApiService.get(`/user/my-favourite-store`, { params });
  return response?.data;
};
