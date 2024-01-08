import { TAddressState } from '@/redux/reducers/address';
import { TGetMyAddressesSuccess } from '@/redux/actions/address';

export const getMyAddressesUpdateState = (state: TAddressState, action: TGetMyAddressesSuccess): TAddressState => ({
  ...state,
  getMyAddressesResponse: action.payload.response,
});
