import ApiService from '@/services/api';

// TYPES

export type TChangePasswordParams = unknown;
export type TChangePasswordBody = unknown;

export type TChangePasswordMaterials = {
  params?: TChangePasswordParams;
  body?: TChangePasswordBody;
};

export type TChangePasswordResponse = unknown;

// FUNCTION

export const changePassword = async ({ params, body }: TChangePasswordMaterials): Promise<TChangePasswordResponse> => {
  const response = await ApiService.post(`/auth/reset-password`, body, { params });
  return response?.data;
};
