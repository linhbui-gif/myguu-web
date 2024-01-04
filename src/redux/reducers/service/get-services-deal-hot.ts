import { TServiceState } from '@/redux/reducers/service';
import { TGetServicesDealHotSuccess } from '@/redux/actions/service';

export const getServicesDealHotUpdateState = (
  state: TServiceState,
  action: TGetServicesDealHotSuccess,
): TServiceState => ({
  ...state,
  getServicesDealHotResponse: action.payload.response,
});
