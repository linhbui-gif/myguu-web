import { all, takeLatest } from 'redux-saga/effects';

import { getStoresMakeupAtHomeAction, getStoresNearByAction, getStoresProminentPlaceAction } from '@/redux/actions';

import { getStoresMakeupAtHomeSaga } from './get-stores-makeup-at-home';
import { getStoresNearBySaga } from './get-stores-near-by';
import { getStoresProminentPlaceSaga } from './get-stores-prominent-place';

export default function* root(): Generator {
  yield all([
    takeLatest(getStoresMakeupAtHomeAction.request.type, getStoresMakeupAtHomeSaga),
    takeLatest(getStoresNearByAction.request.type, getStoresNearBySaga),
    takeLatest(getStoresProminentPlaceAction.request.type, getStoresProminentPlaceSaga),
  ]);
}
