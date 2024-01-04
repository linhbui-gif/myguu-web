import { TBanner } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetBannersParams = unknown;

export type TGetBannersMaterials = {
  params?: TGetBannersParams;
};

export type TGetBannersResponse = TCommonResponse & {
  data: TBanner[];
};

// FUNCTION

export const getBanners = async ({ params }: TGetBannersMaterials): Promise<TGetBannersResponse> => {
  const response = await ApiService.get(`/banner`, { params });
  return response?.data;
};
