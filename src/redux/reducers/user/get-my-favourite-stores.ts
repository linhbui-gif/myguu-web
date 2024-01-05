import { TUserState } from '@/redux/reducers/user';
import { TGetMyFavouriteStoresSuccess } from '@/redux/actions/user';

export const getMyFavouriteStoresUpdateState = (
  state: TUserState,
  action: TGetMyFavouriteStoresSuccess,
): TUserState => ({
  ...state,
  getMyFavouriteStoresResponse: action.payload.response,
});
