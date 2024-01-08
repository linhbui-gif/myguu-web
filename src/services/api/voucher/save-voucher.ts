import ApiService from '@/services/api';

// TYPES

export type TSaveVoucherParams = unknown;
export type TSaveVoucherBody = unknown;

export type TSaveVoucherMaterials = {
  params?: TSaveVoucherParams;
  body?: TSaveVoucherBody;
};

export type TSaveVoucherResponse = unknown;

// FUNCTION

export const saveVoucher = async ({ params, body }: TSaveVoucherMaterials): Promise<TSaveVoucherResponse> => {
  const response = await ApiService.post(`/voucher/save`, body, { params });
  return response?.data;
};
