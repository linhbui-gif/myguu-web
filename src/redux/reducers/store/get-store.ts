import { TStoreState } from '@/redux/reducers/store';
import { TGetStoreSuccess } from '@/redux/actions/store';

export const getStoreUpdateState = (state: TStoreState, action: TGetStoreSuccess): TStoreState => ({
  ...state,
  getStoreResponse: action.payload.response,
});
