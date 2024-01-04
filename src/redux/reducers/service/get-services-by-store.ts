import { TServiceState } from '@/redux/reducers/service';
import { TGetServicesByStoreSuccess } from '@/redux/actions/service';

export const getServicesByStoreUpdateState = (
  state: TServiceState,
  action: TGetServicesByStoreSuccess,
): TServiceState => ({
  ...state,
  getServicesByStoreResponse: action.payload.response,
});
