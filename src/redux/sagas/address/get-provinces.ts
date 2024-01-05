import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getProvincesAction } from '@/redux/actions';
import { getProvinces, TGetProvincesResponse } from '@/services/api';

// FUNCTION

export function* getProvincesSaga(action: ActionType<typeof getProvincesAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getProvinces, materials);
    const getProvincesResponse: TGetProvincesResponse = response as TGetProvincesResponse;
    yield put(getProvincesAction.success(getProvincesResponse));
    successCallback?.(getProvincesResponse);
  } catch (err) {
    yield put(getProvincesAction.failure(err));
    failedCallback?.(err);
  }
}
