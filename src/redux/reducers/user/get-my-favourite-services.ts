import { TUserState } from '@/redux/reducers/user';
import { TGetMyFavouriteServicesSuccess } from '@/redux/actions/user';

export const getMyFavouriteServicesUpdateState = (
  state: TUserState,
  action: TGetMyFavouriteServicesSuccess,
): TUserState => ({
  ...state,
  getMyFavouriteServicesResponse: action.payload.response,
});
