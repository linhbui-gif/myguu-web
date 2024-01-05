import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getStoreVotesAction } from '@/redux/actions';
import { getStoreVotes, TGetStoreVotesResponse } from '@/services/api';

// FUNCTION

export function* getStoreVotesSaga(action: ActionType<typeof getStoreVotesAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getStoreVotes, materials);
    const getStoreVotesResponse: TGetStoreVotesResponse = response as TGetStoreVotesResponse;
    yield put(getStoreVotesAction.success(getStoreVotesResponse));
    successCallback?.(getStoreVotesResponse);
  } catch (err) {
    yield put(getStoreVotesAction.failure(err));
    failedCallback?.(err);
  }
}
