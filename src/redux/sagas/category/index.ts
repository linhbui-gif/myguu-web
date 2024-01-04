import { all, takeLatest } from 'redux-saga/effects';

import { getCategoriesAction } from '@/redux/actions';

import { getCategoriesSaga } from './get-categories';

export default function* root(): Generator {
  yield all([takeLatest(getCategoriesAction.request.type, getCategoriesSaga)]);
}
