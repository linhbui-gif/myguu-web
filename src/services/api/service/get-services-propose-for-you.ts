import { TService } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetServicesProposeForYouParams = unknown;

export type TGetServicesProposeForYouMaterials = {
  params?: TGetServicesProposeForYouParams;
};

export type TGetServicesProposeForYouResponse = TCommonResponse & {
  data: TService[];
};

// FUNCTION

export const getServicesProposeForYou = async ({
  params,
}: TGetServicesProposeForYouMaterials): Promise<TGetServicesProposeForYouResponse> => {
  const response = await ApiService.get(`/service/propose-for-you`, { params });
  return response?.data;
};
