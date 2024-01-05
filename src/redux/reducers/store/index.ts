import { createReducer } from 'deox';

import {
  TGetStoreAlbumsResponse,
  TGetStoreVotesResponse,
  TGetStoreResponse,
  TGetStoresByCategoryResponse,
  TGetStoresMakeupAtHomeResponse,
  TGetStoresNearByResponse,
  TGetStoresProminentPlaceResponse,
} from '@/services/api/store';
import {
  getStoreAlbumsAction,
  getStoreVotesAction,
  getStoreAction,
  getStoresByCategoryAction,
  getStoresMakeupAtHomeAction,
  getStoresNearByAction,
  getStoresProminentPlaceAction,
} from '@/redux/actions';
import { getStoreAlbumsUpdateState } from './get-store-albums';
import { getStoreVotesUpdateState } from './get-store-votes';
import { getStoreUpdateState } from './get-store';
import { getStoresByCategoryUpdateState } from './get-stores-by-category';
import { getStoresMakeupAtHomeUpdateState } from './get-stores-makeup-at-home';
import { getStoresNearByUpdateState } from './get-stores-near-by';
import { getStoresProminentPlaceUpdateState } from './get-stores-prominent-place';

export type TStoreState = {
  getStoreAlbumsResponse?: TGetStoreAlbumsResponse;
  getStoreVotesResponse?: TGetStoreVotesResponse;
  getStoreResponse?: TGetStoreResponse;
  getStoresByCategoryResponse?: TGetStoresByCategoryResponse;
  getStoresMakeupAtHomeResponse?: TGetStoresMakeupAtHomeResponse;
  getStoresNearByResponse?: TGetStoresNearByResponse;
  getStoresProminentPlaceResponse?: TGetStoresProminentPlaceResponse;
};

const initialState: TStoreState = {
  getStoreAlbumsResponse: undefined,
  getStoreVotesResponse: undefined,
  getStoreResponse: undefined,
  getStoresByCategoryResponse: undefined,
  getStoresMakeupAtHomeResponse: undefined,
  getStoresNearByResponse: undefined,
  getStoresProminentPlaceResponse: undefined,
};

const StoreReducer = createReducer(initialState, (handleAction) => [
  handleAction(getStoreAlbumsAction.success, getStoreAlbumsUpdateState),
  handleAction(getStoreVotesAction.success, getStoreVotesUpdateState),
  handleAction(getStoreAction.success, getStoreUpdateState),
  handleAction(getStoresByCategoryAction.success, getStoresByCategoryUpdateState),
  handleAction(getStoresMakeupAtHomeAction.success, getStoresMakeupAtHomeUpdateState),
  handleAction(getStoresNearByAction.success, getStoresNearByUpdateState),
  handleAction(getStoresProminentPlaceAction.success, getStoresProminentPlaceUpdateState),
]);

export default StoreReducer;
