import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import addressReducer from './address';
import authReducer from './auth';
import bannerReducer from './banner';
import categoryReducer from './category';
import notificationReducer from './notification';
import orderReducer from './order';
import serviceReducer from './service';
import storeReducer from './store';
import uiReducer from './ui';
import userReducer from './user';
import voucherReducer from './voucher';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  addressReducer,
  authReducer,
  bannerReducer,
  categoryReducer,
  notificationReducer,
  orderReducer,
  serviceReducer,
  storeReducer,
  uiReducer,
  userReducer,
  voucherReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
