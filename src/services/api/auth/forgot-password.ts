import ApiService from '@/services/api';

// TYPES

export type TForgotPasswordParams = unknown;
export type TForgotPasswordBody = unknown;

export type TForgotPasswordMaterials = {
  params?: TForgotPasswordParams;
  body?: TForgotPasswordBody;
};

export type TForgotPasswordResponse = unknown;

// FUNCTION

export const forgotPassword = async ({ params, body }: TForgotPasswordMaterials): Promise<TForgotPasswordResponse> => {
  const response = await ApiService.post(`/auth/forgot`, body, { params });
  return response?.data;
};
