import { createActionCreator } from 'deox';

import { TGetServiceVotesMaterials, TGetServiceVotesResponse } from '@/services/api/service/get-service-votes';

// CONSTANTS

export enum EGetServiceVotesAction {
  GET_SERVICE_VOTES = 'GET_SERVICE_VOTES',
  GET_SERVICE_VOTES_REQUEST = 'GET_SERVICE_VOTES_REQUEST',
  GET_SERVICE_VOTES_SUCCESS = 'GET_SERVICE_VOTES_SUCCESS',
  GET_SERVICE_VOTES_FAILED = 'GET_SERVICE_VOTES_FAILED',
}

// TYPES

export type TGetServiceVotesRequest = {
  type: EGetServiceVotesAction.GET_SERVICE_VOTES_REQUEST;
  payload: {
    materials: TGetServiceVotesMaterials;
    successCallback?: (response: TGetServiceVotesResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetServiceVotesSuccess = {
  type: EGetServiceVotesAction.GET_SERVICE_VOTES_SUCCESS;
  payload: { response: TGetServiceVotesResponse };
};

export type TGetServiceVotesFailed = { type: EGetServiceVotesAction.GET_SERVICE_VOTES_FAILED };

// FUNCTION

export const getServiceVotesAction = {
  request: createActionCreator(
    EGetServiceVotesAction.GET_SERVICE_VOTES_REQUEST,
    (resolve) =>
      (
        materials: TGetServiceVotesMaterials,
        successCallback?: (response: TGetServiceVotesResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetServiceVotesRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetServiceVotesAction.GET_SERVICE_VOTES_SUCCESS,
    (resolve) =>
      (response: TGetServiceVotesResponse): TGetServiceVotesSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetServiceVotesAction.GET_SERVICE_VOTES_FAILED,
    (resolve) =>
      (error: unknown): TGetServiceVotesFailed =>
        resolve({ error }),
  ),
};
