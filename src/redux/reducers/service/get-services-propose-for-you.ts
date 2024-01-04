import { TServiceState } from '@/redux/reducers/service';
import { TGetServicesProposeForYouSuccess } from '@/redux/actions/service';

export const getServicesProposeForYouUpdateState = (
  state: TServiceState,
  action: TGetServicesProposeForYouSuccess,
): TServiceState => ({
  ...state,
  getServicesProposeForYouResponse: action.payload.response,
});
