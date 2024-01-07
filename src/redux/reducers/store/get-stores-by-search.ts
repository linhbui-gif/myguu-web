import { TStoreState } from '@/redux/reducers/store';
import { TGetStoresBySearchSuccess } from '@/redux/actions/store';

export const getStoresBySearchUpdateState = (state: TStoreState, action: TGetStoresBySearchSuccess): TStoreState => ({
  ...state,
  getStoresBySearchResponse: action.payload.response,
});
