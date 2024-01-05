import { TVoucher } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetVouchersByStorePaths = {
  id: string | number;
};
export type TGetVouchersByStoreParams = unknown;

export type TGetVouchersByStoreMaterials = {
  paths?: TGetVouchersByStorePaths;
  params?: TGetVouchersByStoreParams;
};

export type TGetVouchersByStoreResponse = TCommonResponse & {
  data: TVoucher;
};

// FUNCTION

export const getVouchersByStore = async ({
  paths,
  params,
}: TGetVouchersByStoreMaterials): Promise<TGetVouchersByStoreResponse> => {
  const response = await ApiService.get(`/voucher/store/${paths?.id}`, { params });
  return response?.data;
};
