import { TAddressState } from '@/redux/reducers/address';
import { TDeleteAddressSuccess } from '@/redux/actions/address';

export const deleteAddressUpdateState = (state: TAddressState, action: TDeleteAddressSuccess): TAddressState => ({
  ...state,
  deleteAddressResponse: action.payload.response,
});
