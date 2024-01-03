import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import authReducer from './auth';
import uiReducer from './ui';
import userReducer from './user';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  authReducer,
  uiReducer,
  userReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
