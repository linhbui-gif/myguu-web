import { TVoucher } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetVoucherExchangeParams = {
  page?: number;
  limit?: number;
};

export type TGetVoucherExchangeMaterials = {
  params?: TGetVoucherExchangeParams;
};

export type TGetVoucherExchangeResponse = TCommonResponse & any;

// FUNCTION

export const getAllVoucherExchange = async ({
  params,
}: TGetVoucherExchangeMaterials): Promise<TGetVoucherExchangeResponse> => {
  const response = await ApiService.get(`/voucher/my-exchange`, { params });
  return response?.data;
};
