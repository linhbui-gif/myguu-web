import ApiService from '@/services/api';

// TYPES

export type TUpdateAddressPaths = {
  id: string | number;
};
export type TUpdateAddressBody = unknown;

export type TUpdateAddressMaterials = {
  paths?: TUpdateAddressPaths;
  body?: TUpdateAddressBody;
};

export type TUpdateAddressResponse = unknown;

// FUNCTION

export const updateAddress = async ({ paths, body }: TUpdateAddressMaterials): Promise<TUpdateAddressResponse> => {
  const response = await ApiService.put(`/address/update/${paths?.id}`, body);
  return response?.data;
};
