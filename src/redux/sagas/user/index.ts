import { all, takeLatest } from 'redux-saga/effects';

import {
  getMyFavouriteServicesAction,
  getMyFavouriteStoresAction,
  getMyProfileAction,
  updateMyProfileAction,
} from '@/redux/actions';

import { getMyFavouriteServicesSaga } from './get-my-favourite-services';
import { getMyFavouriteStoresSaga } from './get-my-favourite-stores';
import { getMyProfileSaga } from './get-my-profile';
import { updateMyProfileSaga } from './update-my-profile';

export default function* root(): Generator {
  yield all([
    takeLatest(getMyFavouriteServicesAction.request.type, getMyFavouriteServicesSaga),
    takeLatest(getMyFavouriteStoresAction.request.type, getMyFavouriteStoresSaga),
    takeLatest(getMyProfileAction.request.type, getMyProfileSaga),
    takeLatest(updateMyProfileAction.request.type, updateMyProfileSaga),
  ]);
}
