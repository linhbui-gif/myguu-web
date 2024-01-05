import { TVoucher } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetMyVouchersParams = {
  page?: number;
  limit?: number;
  type?: string;
};

export type TGetMyVouchersMaterials = {
  params?: TGetMyVouchersParams;
};

export type TGetMyVouchersResponse = TCommonResponse & {
  data: TVoucher[];
};

// FUNCTION

export const getMyVouchers = async ({ params }: TGetMyVouchersMaterials): Promise<TGetMyVouchersResponse> => {
  const response = await ApiService.get(`/voucher/by-type`, { params });
  return response?.data;
};
