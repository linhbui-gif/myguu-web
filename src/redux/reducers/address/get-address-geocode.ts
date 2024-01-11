import { TAddressState } from '@/redux/reducers/address';
import { TGetAddressGeocodeSuccess } from '@/redux/actions/address';

export const getAddressGeocodeUpdateState = (
  state: TAddressState,
  action: TGetAddressGeocodeSuccess,
): TAddressState => ({
  ...state,
  getAddressGeocodeResponse: action.payload.response,
});
