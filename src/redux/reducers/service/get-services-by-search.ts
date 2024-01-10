import { TServiceState } from '@/redux/reducers/service';
import { TGetServicesBySearchSuccess } from '@/redux/actions/service';

export const getServicesBySearchUpdateState = (
  state: TServiceState,
  action: TGetServicesBySearchSuccess,
): TServiceState => ({
  ...state,
  getServicesBySearchResponse: action.payload.response,
});
