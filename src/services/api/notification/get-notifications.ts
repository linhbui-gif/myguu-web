import { TNotification } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetNotificationsParams = {
  page: number;
  limit: number;
};

export type TGetNotificationsMaterials = {
  params?: TGetNotificationsParams;
};

export type TGetNotificationsResponse = TCommonResponse & {
  data: TNotification[];
};

// FUNCTION

export const getNotifications = async ({ params }: TGetNotificationsMaterials): Promise<TGetNotificationsResponse> => {
  const response = await ApiService.get(`/notification`, { params });
  return response?.data;
};
