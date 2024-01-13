import { createReducer } from 'deox';

import {
  TGetStoreAlbumsResponse,
  TGetStoreVotesResponse,
  TGetStoreResponse,
  TGetStoresByCategoryResponse,
  TGetStoresBySearchResponse,
  TGetStoresMakeupAtHomeResponse,
  TGetStoresNearByResponse,
  TGetStoresProminentPlaceResponse,
  TGetStoresTrendingResponse,
  TGetStoreAlbumByIdResponse,
} from '@/services/api/store';
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
import { getStoreAlbumsUpdateState } from './get-store-albums';
import { getStoreVotesUpdateState } from './get-store-votes';
import { getStoreUpdateState } from './get-store';
import { getStoresByCategoryUpdateState } from './get-stores-by-category';
import { getStoresBySearchUpdateState } from './get-stores-by-search';
import { getStoresMakeupAtHomeUpdateState } from './get-stores-makeup-at-home';
import { getStoresNearByUpdateState } from './get-stores-near-by';
import { getStoresProminentPlaceUpdateState } from './get-stores-prominent-place';
import { getStoresTrendingUpdateState } from './get-stores-trending';
import { getStoreAlbumDetailUpdateState } from './get-store-abum-detail';

export type TStoreState = {
  getStoreAlbumsResponse?: TGetStoreAlbumsResponse;
  getStoreVotesResponse?: TGetStoreVotesResponse;
  getStoreResponse?: TGetStoreResponse;
  getStoresByCategoryResponse?: TGetStoresByCategoryResponse;
  getStoresBySearchResponse?: TGetStoresBySearchResponse;
  getStoresMakeupAtHomeResponse?: TGetStoresMakeupAtHomeResponse;
  getStoresNearByResponse?: TGetStoresNearByResponse;
  getStoresProminentPlaceResponse?: TGetStoresProminentPlaceResponse;
  getStoresTrendingResponse?: TGetStoresTrendingResponse;
  getStoreAlbumByIdResponse?: TGetStoreAlbumByIdResponse;
};

const initialState: TStoreState = {
  getStoreAlbumsResponse: undefined,
  getStoreVotesResponse: undefined,
  getStoreResponse: undefined,
  getStoresByCategoryResponse: undefined,
  getStoresBySearchResponse: undefined,
  getStoresMakeupAtHomeResponse: undefined,
  getStoresNearByResponse: undefined,
  getStoresProminentPlaceResponse: undefined,
  getStoresTrendingResponse: undefined,
  getStoreAlbumByIdResponse: undefined,
};

const StoreReducer = createReducer(initialState, (handleAction) => [
  handleAction(getStoreAlbumsAction.success, getStoreAlbumsUpdateState),
  handleAction(getStoreVotesAction.success, getStoreVotesUpdateState),
  handleAction(getStoreAction.success, getStoreUpdateState),
  handleAction(getStoresByCategoryAction.success, getStoresByCategoryUpdateState),
  handleAction(getStoresBySearchAction.success, getStoresBySearchUpdateState),
  handleAction(getStoresMakeupAtHomeAction.success, getStoresMakeupAtHomeUpdateState),
  handleAction(getStoresNearByAction.success, getStoresNearByUpdateState),
  handleAction(getStoresProminentPlaceAction.success, getStoresProminentPlaceUpdateState),
  handleAction(getStoresTrendingAction.success, getStoresTrendingUpdateState),
  handleAction(GetStoreAlbumByIdAction.success, getStoreAlbumDetailUpdateState),
]);

export default StoreReducer;
