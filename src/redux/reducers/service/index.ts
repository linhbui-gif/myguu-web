import { createReducer } from 'deox';

import {
  TGetServiceVotesResponse,
  TGetServiceResponse,
  TGetServicesByStoreResponse,
  TGetServicesDealHotResponse,
  TGetServicesProposeForYouResponse,
} from '@/services/api/service';
import {
  getServiceVotesAction,
  getServiceAction,
  getServicesByStoreAction,
  getServicesDealHotAction,
  getServicesProposeForYouAction,
} from '@/redux/actions';
import { getServiceVotesUpdateState } from './get-service-votes';
import { getServiceUpdateState } from './get-service';
import { getServicesByStoreUpdateState } from './get-services-by-store';
import { getServicesDealHotUpdateState } from './get-services-deal-hot';
import { getServicesProposeForYouUpdateState } from './get-services-propose-for-you';

export type TServiceState = {
  getServiceVotesResponse?: TGetServiceVotesResponse;
  getServiceResponse?: TGetServiceResponse;
  getServicesByStoreResponse?: TGetServicesByStoreResponse;
  getServicesDealHotResponse?: TGetServicesDealHotResponse;
  getServicesProposeForYouResponse?: TGetServicesProposeForYouResponse;
};

const initialState: TServiceState = {
  getServiceVotesResponse: undefined,
  getServiceResponse: undefined,
  getServicesByStoreResponse: undefined,
  getServicesDealHotResponse: undefined,
  getServicesProposeForYouResponse: undefined,
};

const ServiceReducer = createReducer(initialState, (handleAction) => [
  handleAction(getServiceVotesAction.success, getServiceVotesUpdateState),
  handleAction(getServiceAction.success, getServiceUpdateState),
  handleAction(getServicesByStoreAction.success, getServicesByStoreUpdateState),
  handleAction(getServicesDealHotAction.success, getServicesDealHotUpdateState),
  handleAction(getServicesProposeForYouAction.success, getServicesProposeForYouUpdateState),
]);

export default ServiceReducer;
