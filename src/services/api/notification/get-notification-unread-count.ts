import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetNotificationUnreadCountParams = unknown;

export type TGetNotificationUnreadCountMaterials = {
  params?: TGetNotificationUnreadCountParams;
};

export type TGetNotificationUnreadCountResponse = TCommonResponse & {
  data: number;
};

// FUNCTION

export const getNotificationUnreadCount = async ({
  params,
}: TGetNotificationUnreadCountMaterials): Promise<TGetNotificationUnreadCountResponse> => {
  const response = await ApiService.get(`/notification/not-read-count`, { params });
  return response?.data;
};
