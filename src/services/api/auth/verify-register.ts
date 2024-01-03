import { TUser } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TVerifyRegisterParams = unknown;
export type TVerifyRegisterBody = unknown;

export type TVerifyRegisterMaterials = {
  params?: TVerifyRegisterParams;
  body?: TVerifyRegisterBody;
};

export type TVerifyRegisterResponse = TCommonResponse & {
  data: {
    access_token: string;
    user: TUser;
  };
};

// FUNCTION

export const verifyRegister = async ({ params, body }: TVerifyRegisterMaterials): Promise<TVerifyRegisterResponse> => {
  const response = await ApiService.post(`/auth/register/verify`, body, { params });
  return response?.data;
};
