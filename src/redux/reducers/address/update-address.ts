import { TAddressState } from '@/redux/reducers/address';
import { TUpdateAddressSuccess } from '@/redux/actions/address';

export const updateAddressUpdateState = (state: TAddressState, action: TUpdateAddressSuccess): TAddressState => ({
  ...state,
  updateAddressResponse: action.payload.response,
});
