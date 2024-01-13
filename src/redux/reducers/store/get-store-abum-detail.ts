import { TStoreState } from '@/redux/reducers/store';
import { TGetStoreAlbumByIdSuccess } from '@/redux/actions/store';

export const getStoreAlbumDetailUpdateState = (state: TStoreState, action: TGetStoreAlbumByIdSuccess): TStoreState => ({
  ...state,
  getStoreAlbumByIdResponse: action.payload.response,
});
