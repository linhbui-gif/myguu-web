import { all, takeLatest } from 'redux-saga/effects';

import {
  getServiceVotesAction,
  getServiceAction,
  getServicesByStoreAction,
  getServicesDealHotAction,
  getServicesProposeForYouAction,
} from '@/redux/actions';

import { getServiceVotesSaga } from './get-service-votes';
import { getServiceSaga } from './get-service';
import { getServicesByStoreSaga } from './get-services-by-store';
import { getServicesDealHotSaga } from './get-services-deal-hot';
import { getServicesProposeForYouSaga } from './get-services-propose-for-you';

export default function* root(): Generator {
  yield all([
    takeLatest(getServiceVotesAction.request.type, getServiceVotesSaga),
    takeLatest(getServiceAction.request.type, getServiceSaga),
    takeLatest(getServicesByStoreAction.request.type, getServicesByStoreSaga),
    takeLatest(getServicesDealHotAction.request.type, getServicesDealHotSaga),
    takeLatest(getServicesProposeForYouAction.request.type, getServicesProposeForYouSaga),
  ]);
}
