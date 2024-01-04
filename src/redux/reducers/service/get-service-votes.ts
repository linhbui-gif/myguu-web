import { TServiceState } from '@/redux/reducers/service';
import { TGetServiceVotesSuccess } from '@/redux/actions/service';

export const getServiceVotesUpdateState = (state: TServiceState, action: TGetServiceVotesSuccess): TServiceState => ({
  ...state,
  getServiceVotesResponse: action.payload.response,
});
