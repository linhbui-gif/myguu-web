import { TAddressState } from '@/redux/reducers/address';
import { TGetProvincesSuccess } from '@/redux/actions/address';

export const getProvincesUpdateState = (state: TAddressState, action: TGetProvincesSuccess): TAddressState => ({
  ...state,
  getProvincesResponse: action.payload.response,
});
