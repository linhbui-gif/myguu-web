import { TAddressState } from '@/redux/reducers/address';
import { TGetDistrictsSuccess } from '@/redux/actions/address';

export const getDistrictsUpdateState = (state: TAddressState, action: TGetDistrictsSuccess): TAddressState => ({
  ...state,
  getDistrictsResponse: action.payload.response,
});
