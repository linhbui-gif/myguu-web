import ApiService from '@/services/api';

// TYPES

export type TDeleteAddressPaths = {
  id: string | number;
};
export type TDeleteAddressParams = unknown;

export type TDeleteAddressMaterials = {
  paths?: TDeleteAddressPaths;
  params?: TDeleteAddressParams;
};

export type TDeleteAddressResponse = unknown;

// FUNCTION

export const deleteAddress = async ({ paths, params }: TDeleteAddressMaterials): Promise<TDeleteAddressResponse> => {
  const response = await ApiService.delete(`/address/delete/${paths?.id}`, { params });
  return response?.data;
};
