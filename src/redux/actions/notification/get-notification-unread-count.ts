import { createActionCreator } from 'deox';

import {
  TGetNotificationUnreadCountMaterials,
  TGetNotificationUnreadCountResponse,
} from '@/services/api/notification/get-notification-unread-count';

// CONSTANTS

export enum EGetNotificationUnreadCountAction {
  GET_NOTIFICATION_UNREAD_COUNT = 'GET_NOTIFICATION_UNREAD_COUNT',
  GET_NOTIFICATION_UNREAD_COUNT_REQUEST = 'GET_NOTIFICATION_UNREAD_COUNT_REQUEST',
  GET_NOTIFICATION_UNREAD_COUNT_SUCCESS = 'GET_NOTIFICATION_UNREAD_COUNT_SUCCESS',
  GET_NOTIFICATION_UNREAD_COUNT_FAILED = 'GET_NOTIFICATION_UNREAD_COUNT_FAILED',
}

// TYPES

export type TGetNotificationUnreadCountRequest = {
  type: EGetNotificationUnreadCountAction.GET_NOTIFICATION_UNREAD_COUNT_REQUEST;
  payload: {
    materials: TGetNotificationUnreadCountMaterials;
    successCallback?: (response: TGetNotificationUnreadCountResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetNotificationUnreadCountSuccess = {
  type: EGetNotificationUnreadCountAction.GET_NOTIFICATION_UNREAD_COUNT_SUCCESS;
  payload: { response: TGetNotificationUnreadCountResponse };
};

export type TGetNotificationUnreadCountFailed = {
  type: EGetNotificationUnreadCountAction.GET_NOTIFICATION_UNREAD_COUNT_FAILED;
};

// FUNCTION

export const getNotificationUnreadCountAction = {
  request: createActionCreator(
    EGetNotificationUnreadCountAction.GET_NOTIFICATION_UNREAD_COUNT_REQUEST,
    (resolve) =>
      (
        materials: TGetNotificationUnreadCountMaterials,
        successCallback?: (response: TGetNotificationUnreadCountResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetNotificationUnreadCountRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetNotificationUnreadCountAction.GET_NOTIFICATION_UNREAD_COUNT_SUCCESS,
    (resolve) =>
      (response: TGetNotificationUnreadCountResponse): TGetNotificationUnreadCountSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetNotificationUnreadCountAction.GET_NOTIFICATION_UNREAD_COUNT_FAILED,
    (resolve) =>
      (error: unknown): TGetNotificationUnreadCountFailed =>
        resolve({ error }),
  ),
};
