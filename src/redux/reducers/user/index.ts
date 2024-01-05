import { createReducer } from 'deox';

import {
  TGetMyFavouriteServicesResponse,
  TGetMyFavouriteStoresResponse,
  TGetMyProfileResponse,
  TUpdateMyProfileResponse,
} from '@/services/api/user';
import {
  getMyFavouriteServicesAction,
  getMyFavouriteStoresAction,
  getMyProfileAction,
  updateMyProfileAction,
} from '@/redux/actions';
import { getMyFavouriteServicesUpdateState } from './get-my-favourite-services';
import { getMyFavouriteStoresUpdateState } from './get-my-favourite-stores';
import { getMyProfileUpdateState } from './get-my-profile';
import { updateMyProfileUpdateState } from './update-my-profile';

export type TUserState = {
  getMyFavouriteServicesResponse?: TGetMyFavouriteServicesResponse;
  getMyFavouriteStoresResponse?: TGetMyFavouriteStoresResponse;
  getMyProfileResponse?: TGetMyProfileResponse;
  updateMyProfileResponse?: TUpdateMyProfileResponse;
};

const initialState: TUserState = {
  getMyFavouriteServicesResponse: undefined,
  getMyFavouriteStoresResponse: undefined,
  getMyProfileResponse: undefined,
  updateMyProfileResponse: undefined,
};

const UserReducer = createReducer(initialState, (handleAction) => [
  handleAction(getMyFavouriteServicesAction.success, getMyFavouriteServicesUpdateState),
  handleAction(getMyFavouriteStoresAction.success, getMyFavouriteStoresUpdateState),
  handleAction(getMyProfileAction.success, getMyProfileUpdateState),
  handleAction(updateMyProfileAction.success, updateMyProfileUpdateState),
]);

export default UserReducer;
