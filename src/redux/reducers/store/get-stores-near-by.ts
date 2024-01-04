import { TStoreState } from '@/redux/reducers/store';
import { TGetStoresNearBySuccess } from '@/redux/actions/store';

export const getStoresNearByUpdateState = (state: TStoreState, action: TGetStoresNearBySuccess): TStoreState => ({
  ...state,
  getStoresNearByResponse: action.payload.response,
});
