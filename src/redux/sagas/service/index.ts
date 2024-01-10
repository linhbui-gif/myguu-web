import { all, takeLatest } from 'redux-saga/effects';

import {
  getServiceVotesAction,
  getServiceAction,
  getServicesBySearchAction,
  getServicesByStoreAction,
  getServicesDealHotAction,
  getServicesProposeForYouAction,
} from '@/redux/actions';

import { getServiceVotesSaga } from './get-service-votes';
import { getServiceSaga } from './get-service';
import { getServicesBySearchSaga } from './get-services-by-search';
import { getServicesByStoreSaga } from './get-services-by-store';
import { getServicesDealHotSaga } from './get-services-deal-hot';
import { getServicesProposeForYouSaga } from './get-services-propose-for-you';

export default function* root(): Generator {
  yield all([
    takeLatest(getServiceVotesAction.request.type, getServiceVotesSaga),
    takeLatest(getServiceAction.request.type, getServiceSaga),
    takeLatest(getServicesBySearchAction.request.type, getServicesBySearchSaga),
    takeLatest(getServicesByStoreAction.request.type, getServicesByStoreSaga),
    takeLatest(getServicesDealHotAction.request.type, getServicesDealHotSaga),
    takeLatest(getServicesProposeForYouAction.request.type, getServicesProposeForYouSaga),
  ]);
}
