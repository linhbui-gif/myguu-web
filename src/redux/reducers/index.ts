import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import authReducer from './auth';
import bannerReducer from './banner';
import categoryReducer from './category';
import serviceReducer from './service';
import storeReducer from './store';
import uiReducer from './ui';
import userReducer from './user';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  authReducer,
  bannerReducer,
  categoryReducer,
  serviceReducer,
  storeReducer,
  uiReducer,
  userReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
