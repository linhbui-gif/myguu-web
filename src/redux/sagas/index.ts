import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import bannerSaga from './banner';
import categorySaga from './category';
import serviceSaga from './service';
import storeSaga from './store';
import userSaga from './user';

const rootSaga = function* root(): Generator {
  yield all([fork(authSaga), fork(bannerSaga), fork(categorySaga), fork(serviceSaga), fork(storeSaga), fork(userSaga)]);
};

export default rootSaga;
