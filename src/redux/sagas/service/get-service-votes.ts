import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getServiceVotesAction } from '@/redux/actions';
import { getServiceVotes, TGetServiceVotesResponse } from '@/services/api';

// FUNCTION

export function* getServiceVotesSaga(action: ActionType<typeof getServiceVotesAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getServiceVotes, materials);
    const getServiceVotesResponse: TGetServiceVotesResponse = response as TGetServiceVotesResponse;
    yield put(getServiceVotesAction.success(getServiceVotesResponse));
    successCallback?.(getServiceVotesResponse);
  } catch (err) {
    yield put(getServiceVotesAction.failure(err));
    failedCallback?.(err);
  }
}
