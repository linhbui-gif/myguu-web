import { all, takeLatest } from 'redux-saga/effects';

import { getBannersAction } from '@/redux/actions';

import { getBannersSaga } from './get-banners';

export default function* root(): Generator {
  yield all([takeLatest(getBannersAction.request.type, getBannersSaga)]);
}
