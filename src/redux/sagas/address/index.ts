import { all, takeLatest } from 'redux-saga/effects';

import { getDistrictsAction, getProvincesAction } from '@/redux/actions';

import { getDistrictsSaga } from './get-districts';
import { getProvincesSaga } from './get-provinces';

export default function* root(): Generator {
  yield all([
    takeLatest(getDistrictsAction.request.type, getDistrictsSaga),
    takeLatest(getProvincesAction.request.type, getProvincesSaga),
  ]);
}
