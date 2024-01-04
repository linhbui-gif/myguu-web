import { TStoreState } from '@/redux/reducers/store';
import { TGetStoresProminentPlaceSuccess } from '@/redux/actions/store';

export const getStoresProminentPlaceUpdateState = (
  state: TStoreState,
  action: TGetStoresProminentPlaceSuccess,
): TStoreState => ({
  ...state,
  getStoresProminentPlaceResponse: action.payload.response,
});
