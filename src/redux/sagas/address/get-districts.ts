import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getDistrictsAction } from '@/redux/actions';
import { getDistricts, TGetDistrictsResponse } from '@/services/api';

// FUNCTION

export function* getDistrictsSaga(action: ActionType<typeof getDistrictsAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getDistricts, materials);
    const getDistrictsResponse: TGetDistrictsResponse = response as TGetDistrictsResponse;
    yield put(getDistrictsAction.success(getDistrictsResponse));
    successCallback?.(getDistrictsResponse);
  } catch (err) {
    yield put(getDistrictsAction.failure(err));
    failedCallback?.(err);
  }
}
