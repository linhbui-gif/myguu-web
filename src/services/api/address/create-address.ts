import ApiService from '@/services/api';

// TYPES

export type TCreateAddressParams = unknown;
export type TCreateAddressBody = unknown;

export type TCreateAddressMaterials = {
  params?: TCreateAddressParams;
  body?: TCreateAddressBody;
};

export type TCreateAddressResponse = unknown;

// FUNCTION

export const createAddress = async ({ params, body }: TCreateAddressMaterials): Promise<TCreateAddressResponse> => {
  const response = await ApiService.post(`/address/create`, body, { params });
  return response?.data;
};
