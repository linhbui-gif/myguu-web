import { all, takeLatest } from 'redux-saga/effects';

import { getNotificationUnreadCountAction, getNotificationsAction } from '@/redux/actions';

import { getNotificationUnreadCountSaga } from './get-notification-unread-count';
import { getNotificationsSaga } from './get-notifications';

export default function* root(): Generator {
  yield all([
    takeLatest(getNotificationUnreadCountAction.request.type, getNotificationUnreadCountSaga),
    takeLatest(getNotificationsAction.request.type, getNotificationsSaga),
  ]);
}
