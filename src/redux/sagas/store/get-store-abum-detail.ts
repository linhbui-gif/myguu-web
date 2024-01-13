import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { GetStoreAlbumByIdAction } from '@/redux/actions';
import { GetStoreAlbumById, TGetStoreAlbumByIdResponse } from '@/services/api';

// FUNCTION

export function* getStoreAlbumByIdSaga(action: ActionType<typeof GetStoreAlbumByIdAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(GetStoreAlbumById, materials);
    const getStoreAlbumByIdResponse: TGetStoreAlbumByIdResponse = response as TGetStoreAlbumByIdResponse;
    yield put(GetStoreAlbumByIdAction.success(getStoreAlbumByIdResponse));
    successCallback?.(getStoreAlbumByIdResponse);
  } catch (err) {
    yield put(GetStoreAlbumByIdAction.failure(err));
    failedCallback?.(err);
  }
}
