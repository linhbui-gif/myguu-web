import { TUser } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TLoginParams = unknown;
export type TLoginBody = unknown;

export type TLoginMaterials = {
  params?: TLoginParams;
  body?: TLoginBody;
};

export type TLoginResponse = TCommonResponse & {
  data: {
    access_token: string;
    user: TUser;
  };
};

// FUNCTION

export const login = async ({ params, body }: TLoginMaterials): Promise<TLoginResponse> => {
  const response = await ApiService.post(`/auth/login`, body, { params });
  return response?.data;
};
