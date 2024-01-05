import { TStoreState } from '@/redux/reducers/store';
import { TGetStoreVotesSuccess } from '@/redux/actions/store';

export const getStoreVotesUpdateState = (state: TStoreState, action: TGetStoreVotesSuccess): TStoreState => ({
  ...state,
  getStoreVotesResponse: action.payload.response,
});
