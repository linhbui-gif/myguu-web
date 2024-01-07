import { all, fork } from 'redux-saga/effects';

import addressSaga from './address';
import authSaga from './auth';
import bannerSaga from './banner';
import categorySaga from './category';
import orderSaga from './order';
import serviceSaga from './service';
import storeSaga from './store';
import userSaga from './user';
import voucherSaga from './voucher';

const rootSaga = function* root(): Generator {
  yield all([
    fork(addressSaga),
    fork(authSaga),
    fork(bannerSaga),
    fork(categorySaga),
    fork(orderSaga),
    fork(serviceSaga),
    fork(storeSaga),
    fork(userSaga),
    fork(voucherSaga),
  ]);
};

export default rootSaga;
