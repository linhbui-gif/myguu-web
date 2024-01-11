import { createReducer } from 'deox';

import {
  TCreateAddressResponse,
  TDeleteAddressResponse,
  TGetAddressGeocodeResponse,
  TGetDistrictsResponse,
  TGetMyAddressesResponse,
  TGetProvincesResponse,
  TUpdateAddressResponse,
} from '@/services/api/address';
import {
  createAddressAction,
  deleteAddressAction,
  getAddressGeocodeAction,
  getDistrictsAction,
  getMyAddressesAction,
  getProvincesAction,
  updateAddressAction,
} from '@/redux/actions';
import { createAddressUpdateState } from './create-address';
import { deleteAddressUpdateState } from './delete-address';
import { getAddressGeocodeUpdateState } from './get-address-geocode';
import { getDistrictsUpdateState } from './get-districts';
import { getMyAddressesUpdateState } from './get-my-addresses';
import { getProvincesUpdateState } from './get-provinces';
import { updateAddressUpdateState } from './update-address';

export type TAddressState = {
  createAddressResponse?: TCreateAddressResponse;
  deleteAddressResponse?: TDeleteAddressResponse;
  getAddressGeocodeResponse?: TGetAddressGeocodeResponse;
  getDistrictsResponse?: TGetDistrictsResponse;
  getMyAddressesResponse?: TGetMyAddressesResponse;
  getProvincesResponse?: TGetProvincesResponse;
  updateAddressResponse?: TUpdateAddressResponse;
};

const initialState: TAddressState = {
  createAddressResponse: undefined,
  deleteAddressResponse: undefined,
  getAddressGeocodeResponse: undefined,
  getDistrictsResponse: undefined,
  getMyAddressesResponse: undefined,
  getProvincesResponse: undefined,
  updateAddressResponse: undefined,
};

const AddressReducer = createReducer(initialState, (handleAction) => [
  handleAction(createAddressAction.success, createAddressUpdateState),
  handleAction(deleteAddressAction.success, deleteAddressUpdateState),
  handleAction(getAddressGeocodeAction.success, getAddressGeocodeUpdateState),
  handleAction(getDistrictsAction.success, getDistrictsUpdateState),
  handleAction(getMyAddressesAction.success, getMyAddressesUpdateState),
  handleAction(getProvincesAction.success, getProvincesUpdateState),
  handleAction(updateAddressAction.success, updateAddressUpdateState),
]);

export default AddressReducer;
