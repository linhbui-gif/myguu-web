import { TNotificationState } from '@/redux/reducers/notification';
import { TGetNotificationUnreadCountSuccess } from '@/redux/actions/notification';

export const getNotificationUnreadCountUpdateState = (
  state: TNotificationState,
  action: TGetNotificationUnreadCountSuccess,
): TNotificationState => ({
  ...state,
  getNotificationUnreadCountResponse: action.payload.response,
});
