import { TService } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetMyFavouriteServicesParams = unknown;

export type TGetMyFavouriteServicesMaterials = {
  params?: TGetMyFavouriteServicesParams;
};

export type TGetMyFavouriteServicesResponse = TCommonResponse & {
  data: TService[];
};

// FUNCTION

export const getMyFavouriteServices = async ({
  params,
}: TGetMyFavouriteServicesMaterials): Promise<TGetMyFavouriteServicesResponse> => {
  const response = await ApiService.get(`/user/my-favourite-service`, { params });
  return response?.data;
};
