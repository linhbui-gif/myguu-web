import { createReducer } from 'deox';

import {
  TGetStoresMakeupAtHomeResponse,
  TGetStoresNearByResponse,
  TGetStoresProminentPlaceResponse,
} from '@/services/api/store';
import { getStoresMakeupAtHomeAction, getStoresNearByAction, getStoresProminentPlaceAction } from '@/redux/actions';
import { getStoresMakeupAtHomeUpdateState } from './get-stores-makeup-at-home';
import { getStoresNearByUpdateState } from './get-stores-near-by';
import { getStoresProminentPlaceUpdateState } from './get-stores-prominent-place';

export type TStoreState = {
  getStoresMakeupAtHomeResponse?: TGetStoresMakeupAtHomeResponse;
  getStoresNearByResponse?: TGetStoresNearByResponse;
  getStoresProminentPlaceResponse?: TGetStoresProminentPlaceResponse;
};

const initialState: TStoreState = {
  getStoresMakeupAtHomeResponse: undefined,
  getStoresNearByResponse: undefined,
  getStoresProminentPlaceResponse: undefined,
};

const StoreReducer = createReducer(initialState, (handleAction) => [
  handleAction(getStoresMakeupAtHomeAction.success, getStoresMakeupAtHomeUpdateState),
  handleAction(getStoresNearByAction.success, getStoresNearByUpdateState),
  handleAction(getStoresProminentPlaceAction.success, getStoresProminentPlaceUpdateState),
]);

export default StoreReducer;
