import { TStoreState } from '@/redux/reducers/store';
import { TGetStoreAlbumsSuccess } from '@/redux/actions/store';

export const getStoreAlbumsUpdateState = (state: TStoreState, action: TGetStoreAlbumsSuccess): TStoreState => ({
  ...state,
  getStoreAlbumsResponse: action.payload.response,
});
