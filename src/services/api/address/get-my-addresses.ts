import { TAddress } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetMyAddressesParams = unknown;

export type TGetMyAddressesMaterials = {
  params?: TGetMyAddressesParams;
};

export type TGetMyAddressesResponse = TCommonResponse & {
  data: TAddress[];
};

// FUNCTION

export const getMyAddresses = async ({ params }: TGetMyAddressesMaterials): Promise<TGetMyAddressesResponse> => {
  const response = await ApiService.get(`/address`, { params });
  return response?.data;
};
