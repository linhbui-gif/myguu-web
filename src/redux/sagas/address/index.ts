import { all, takeLatest } from 'redux-saga/effects';

import {
  createAddressAction,
  deleteAddressAction,
  getAddressGeocodeAction,
  getDistrictsAction,
  getMyAddressesAction,
  getProvincesAction,
  updateAddressAction,
} from '@/redux/actions';

import { createAddressSaga } from './create-address';
import { deleteAddressSaga } from './delete-address';
import { getAddressGeocodeSaga } from './get-address-geocode';
import { getDistrictsSaga } from './get-districts';
import { getMyAddressesSaga } from './get-my-addresses';
import { getProvincesSaga } from './get-provinces';
import { updateAddressSaga } from './update-address';

export default function* root(): Generator {
  yield all([
    takeLatest(createAddressAction.request.type, createAddressSaga),
    takeLatest(deleteAddressAction.request.type, deleteAddressSaga),
    takeLatest(getAddressGeocodeAction.request.type, getAddressGeocodeSaga),
    takeLatest(getDistrictsAction.request.type, getDistrictsSaga),
    takeLatest(getMyAddressesAction.request.type, getMyAddressesSaga),
    takeLatest(getProvincesAction.request.type, getProvincesSaga),
    takeLatest(updateAddressAction.request.type, updateAddressSaga),
  ]);
}
