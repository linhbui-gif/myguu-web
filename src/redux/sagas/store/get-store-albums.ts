import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getStoreAlbumsAction } from '@/redux/actions';
import { getStoreAlbums, TGetStoreAlbumsResponse } from '@/services/api';

// FUNCTION

export function* getStoreAlbumsSaga(action: ActionType<typeof getStoreAlbumsAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getStoreAlbums, materials);
    const getStoreAlbumsResponse: TGetStoreAlbumsResponse = response as TGetStoreAlbumsResponse;
    yield put(getStoreAlbumsAction.success(getStoreAlbumsResponse));
    successCallback?.(getStoreAlbumsResponse);
  } catch (err) {
    yield put(getStoreAlbumsAction.failure(err));
    failedCallback?.(err);
  }
}
