import { TServiceState } from '@/redux/reducers/service';
import { TGetServiceSuccess } from '@/redux/actions/service';

export const getServiceUpdateState = (state: TServiceState, action: TGetServiceSuccess): TServiceState => ({
  ...state,
  getServiceResponse: action.payload.response,
});
