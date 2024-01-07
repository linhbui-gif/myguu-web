import { TOrder } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetOrdersParams = {
  page?: number;
  limit?: number;
  tab?: string;
  from_date?: string;
  to_date?: string;
};

export type TGetOrdersMaterials = {
  params?: TGetOrdersParams;
};

export type TGetOrdersResponse = TCommonResponse & {
  data: TOrder[];
};

// FUNCTION

export const getOrders = async ({ params }: TGetOrdersMaterials): Promise<TGetOrdersResponse> => {
  const response = await ApiService.get(`/order`, { params });
  return response?.data;
};
