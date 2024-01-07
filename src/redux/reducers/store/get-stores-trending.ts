import { TStoreState } from '@/redux/reducers/store';
import { TGetStoresTrendingSuccess } from '@/redux/actions/store';

export const getStoresTrendingUpdateState = (state: TStoreState, action: TGetStoresTrendingSuccess): TStoreState => ({
  ...state,
  getStoresTrendingResponse: action.payload.response,
});
