import { all, takeLatest } from 'redux-saga/effects';

import {
  getStoreAlbumsAction,
  getStoreVotesAction,
  getStoreAction,
  getStoresByCategoryAction,
  getStoresBySearchAction,
  getStoresMakeupAtHomeAction,
  getStoresNearByAction,
  getStoresProminentPlaceAction,
  getStoresTrendingAction,
  GetStoreAlbumByIdAction,
} from '@/redux/actions';

import { getStoreAlbumsSaga } from './get-store-albums';
import { getStoreVotesSaga } from './get-store-votes';
import { getStoreSaga } from './get-store';
import { getStoresByCategorySaga } from './get-stores-by-category';
import { getStoresBySearchSaga } from './get-stores-by-search';
import { getStoresMakeupAtHomeSaga } from './get-stores-makeup-at-home';
import { getStoresNearBySaga } from './get-stores-near-by';
import { getStoresProminentPlaceSaga } from './get-stores-prominent-place';
import { getStoresTrendingSaga } from './get-stores-trending';
import { getStoreAlbumByIdSaga } from './get-store-abum-detail';

export default function* root(): Generator {
  yield all([
    takeLatest(getStoreAlbumsAction.request.type, getStoreAlbumsSaga),
    takeLatest(getStoreVotesAction.request.type, getStoreVotesSaga),
    takeLatest(getStoreAction.request.type, getStoreSaga),
    takeLatest(getStoresByCategoryAction.request.type, getStoresByCategorySaga),
    takeLatest(getStoresBySearchAction.request.type, getStoresBySearchSaga),
    takeLatest(getStoresMakeupAtHomeAction.request.type, getStoresMakeupAtHomeSaga),
    takeLatest(getStoresNearByAction.request.type, getStoresNearBySaga),
    takeLatest(getStoresProminentPlaceAction.request.type, getStoresProminentPlaceSaga),
    takeLatest(getStoresTrendingAction.request.type, getStoresTrendingSaga),
    takeLatest(GetStoreAlbumByIdAction.request.type, getStoreAlbumByIdSaga),
  ]);
}
