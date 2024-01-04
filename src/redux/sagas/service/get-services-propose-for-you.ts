import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getServicesProposeForYouAction } from '@/redux/actions';
import { getServicesProposeForYou, TGetServicesProposeForYouResponse } from '@/services/api';

// FUNCTION

export function* getServicesProposeForYouSaga(
  action: ActionType<typeof getServicesProposeForYouAction.request>,
): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getServicesProposeForYou, materials);
    const getServicesProposeForYouResponse: TGetServicesProposeForYouResponse =
      response as TGetServicesProposeForYouResponse;
    yield put(getServicesProposeForYouAction.success(getServicesProposeForYouResponse));
    successCallback?.(getServicesProposeForYouResponse);
  } catch (err) {
    yield put(getServicesProposeForYouAction.failure(err));
    failedCallback?.(err);
  }
}
