import { createActionCreator } from 'deox';

import { TGetStoreVotesMaterials, TGetStoreVotesResponse } from '@/services/api/store/get-store-votes';

// CONSTANTS

export enum EGetStoreVotesAction {
  GET_STORE_VOTES = 'GET_STORE_VOTES',
  GET_STORE_VOTES_REQUEST = 'GET_STORE_VOTES_REQUEST',
  GET_STORE_VOTES_SUCCESS = 'GET_STORE_VOTES_SUCCESS',
  GET_STORE_VOTES_FAILED = 'GET_STORE_VOTES_FAILED',
}

// TYPES

export type TGetStoreVotesRequest = {
  type: EGetStoreVotesAction.GET_STORE_VOTES_REQUEST;
  payload: {
    materials: TGetStoreVotesMaterials;
    successCallback?: (response: TGetStoreVotesResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetStoreVotesSuccess = {
  type: EGetStoreVotesAction.GET_STORE_VOTES_SUCCESS;
  payload: { response: TGetStoreVotesResponse };
};

export type TGetStoreVotesFailed = { type: EGetStoreVotesAction.GET_STORE_VOTES_FAILED };

// FUNCTION

export const getStoreVotesAction = {
  request: createActionCreator(
    EGetStoreVotesAction.GET_STORE_VOTES_REQUEST,
    (resolve) =>
      (
        materials: TGetStoreVotesMaterials,
        successCallback?: (response: TGetStoreVotesResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetStoreVotesRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetStoreVotesAction.GET_STORE_VOTES_SUCCESS,
    (resolve) =>
      (response: TGetStoreVotesResponse): TGetStoreVotesSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetStoreVotesAction.GET_STORE_VOTES_FAILED,
    (resolve) =>
      (error: unknown): TGetStoreVotesFailed =>
        resolve({ error }),
  ),
};
