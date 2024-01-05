import { createReducer } from 'deox';

import { TGetDistrictsResponse, TGetProvincesResponse } from '@/services/api/address';
import { getDistrictsAction, getProvincesAction } from '@/redux/actions';
import { getDistrictsUpdateState } from './get-districts';
import { getProvincesUpdateState } from './get-provinces';

export type TAddressState = {
  getDistrictsResponse?: TGetDistrictsResponse;
  getProvincesResponse?: TGetProvincesResponse;
};

const initialState: TAddressState = {
  getDistrictsResponse: undefined,
  getProvincesResponse: undefined,
};

const AddressReducer = createReducer(initialState, (handleAction) => [
  handleAction(getDistrictsAction.success, getDistrictsUpdateState),
  handleAction(getProvincesAction.success, getProvincesUpdateState),
]);

export default AddressReducer;
