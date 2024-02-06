import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getNotificationUnreadCountAction } from '@/redux/actions';
import { getNotificationUnreadCount, TGetNotificationUnreadCountResponse } from '@/services/api';

// FUNCTION

export function* getNotificationUnreadCountSaga(
  action: ActionType<typeof getNotificationUnreadCountAction.request>,
): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getNotificationUnreadCount, materials);
    const getNotificationUnreadCountResponse: TGetNotificationUnreadCountResponse =
      response as TGetNotificationUnreadCountResponse;
    yield put(getNotificationUnreadCountAction.success(getNotificationUnreadCountResponse));
    successCallback?.(getNotificationUnreadCountResponse);
  } catch (err) {
    yield put(getNotificationUnreadCountAction.failure(err));
    failedCallback?.(err);
  }
}
