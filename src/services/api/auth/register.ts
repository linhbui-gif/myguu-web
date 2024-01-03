import ApiService from '@/services/api';

// TYPES

export type TRegisterParams = unknown;
export type TRegisterBody = unknown;

export type TRegisterMaterials = {
  params?: TRegisterParams;
  body?: TRegisterBody;
};

export type TRegisterResponse = unknown;

// FUNCTION

export const register = async ({ params, body }: TRegisterMaterials): Promise<TRegisterResponse> => {
  const response = await ApiService.post(`/auth/register`, body, { params });
  return response?.data;
};
