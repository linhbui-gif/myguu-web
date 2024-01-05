import { all, takeLatest } from 'redux-saga/effects';

import {
  getStoreAlbumsAction,
  getStoreVotesAction,
  getStoreAction,
  getStoresMakeupAtHomeAction,
  getStoresNearByAction,
  getStoresProminentPlaceAction,
} from '@/redux/actions';

import { getStoreAlbumsSaga } from './get-store-albums';
import { getStoreVotesSaga } from './get-store-votes';
import { getStoreSaga } from './get-store';
import { getStoresMakeupAtHomeSaga } from './get-stores-makeup-at-home';
import { getStoresNearBySaga } from './get-stores-near-by';
import { getStoresProminentPlaceSaga } from './get-stores-prominent-place';

export default function* root(): Generator {
  yield all([
    takeLatest(getStoreAlbumsAction.request.type, getStoreAlbumsSaga),
    takeLatest(getStoreVotesAction.request.type, getStoreVotesSaga),
    takeLatest(getStoreAction.request.type, getStoreSaga),
    takeLatest(getStoresMakeupAtHomeAction.request.type, getStoresMakeupAtHomeSaga),
    takeLatest(getStoresNearByAction.request.type, getStoresNearBySaga),
    takeLatest(getStoresProminentPlaceAction.request.type, getStoresProminentPlaceSaga),
  ]);
}
