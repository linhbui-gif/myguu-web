import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getBannersAction } from '@/redux/actions';
import { getBanners, TGetBannersResponse } from '@/services/api';

// FUNCTION

export function* getBannersSaga(action: ActionType<typeof getBannersAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getBanners, materials);
    const getBannersResponse: TGetBannersResponse = response as TGetBannersResponse;
    yield put(getBannersAction.success(getBannersResponse));
    successCallback?.(getBannersResponse);
  } catch (err) {
    yield put(getBannersAction.failure(err));
    failedCallback?.(err);
  }
}
