import { createReducer } from 'deox';

import {
  TCreateAddressResponse,
  TDeleteAddressResponse,
  TGetDistrictsResponse,
  TGetMyAddressesResponse,
  TGetProvincesResponse,
  TUpdateAddressResponse,
} from '@/services/api/address';
import {
  createAddressAction,
  deleteAddressAction,
  getDistrictsAction,
  getMyAddressesAction,
  getProvincesAction,
  updateAddressAction,
} from '@/redux/actions';
import { createAddressUpdateState } from './create-address';
import { deleteAddressUpdateState } from './delete-address';
import { getDistrictsUpdateState } from './get-districts';
import { getMyAddressesUpdateState } from './get-my-addresses';
import { getProvincesUpdateState } from './get-provinces';
import { updateAddressUpdateState } from './update-address';

export type TAddressState = {
  createAddressResponse?: TCreateAddressResponse;
  deleteAddressResponse?: TDeleteAddressResponse;
  getDistrictsResponse?: TGetDistrictsResponse;
  getMyAddressesResponse?: TGetMyAddressesResponse;
  getProvincesResponse?: TGetProvincesResponse;
  updateAddressResponse?: TUpdateAddressResponse;
};

const initialState: TAddressState = {
  createAddressResponse: undefined,
  deleteAddressResponse: undefined,
  getDistrictsResponse: undefined,
  getMyAddressesResponse: undefined,
  getProvincesResponse: undefined,
  updateAddressResponse: undefined,
};

const AddressReducer = createReducer(initialState, (handleAction) => [
  handleAction(createAddressAction.success, createAddressUpdateState),
  handleAction(deleteAddressAction.success, deleteAddressUpdateState),
  handleAction(getDistrictsAction.success, getDistrictsUpdateState),
  handleAction(getMyAddressesAction.success, getMyAddressesUpdateState),
  handleAction(getProvincesAction.success, getProvincesUpdateState),
  handleAction(updateAddressAction.success, updateAddressUpdateState),
]);

export default AddressReducer;
