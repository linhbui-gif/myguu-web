import { createReducer } from 'deox';

import { TGetNotificationUnreadCountResponse, TGetNotificationsResponse } from '@/services/api/notification';
import { getNotificationUnreadCountAction, getNotificationsAction } from '@/redux/actions';
import { getNotificationUnreadCountUpdateState } from './get-notification-unread-count';
import { getNotificationsUpdateState } from './get-notifications';

export type TNotificationState = {
  getNotificationUnreadCountResponse?: TGetNotificationUnreadCountResponse;
  getNotificationsResponse?: TGetNotificationsResponse;
};

const initialState: TNotificationState = {
  getNotificationUnreadCountResponse: undefined,
  getNotificationsResponse: undefined,
};

const NotificationReducer = createReducer(initialState, (handleAction) => [
  handleAction(getNotificationUnreadCountAction.success, getNotificationUnreadCountUpdateState),
  handleAction(getNotificationsAction.success, getNotificationsUpdateState),
]);

export default NotificationReducer;
