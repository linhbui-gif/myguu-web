import { TAddressState } from '@/redux/reducers/address';
import { TCreateAddressSuccess } from '@/redux/actions/address';

export const createAddressUpdateState = (state: TAddressState, action: TCreateAddressSuccess): TAddressState => ({
  ...state,
  createAddressResponse: action.payload.response,
});
