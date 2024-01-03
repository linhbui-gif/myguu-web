import ApiService from '@/services/api';

// TYPES

export type TVerifyForgotPasswordParams = unknown;
export type TVerifyForgotPasswordBody = unknown;

export type TVerifyForgotPasswordMaterials = {
  params?: TVerifyForgotPasswordParams;
  body?: TVerifyForgotPasswordBody;
};

export type TVerifyForgotPasswordResponse = {
  data: { transaction: string };
};

// FUNCTION

export const verifyForgotPassword = async ({
  params,
  body,
}: TVerifyForgotPasswordMaterials): Promise<TVerifyForgotPasswordResponse> => {
  const response = await ApiService.post(`/auth/forgot/verify`, body, { params });
  return response?.data;
};
