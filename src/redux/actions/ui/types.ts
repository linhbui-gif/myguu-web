import { EUIAction } from './constants';

export type TSetGeoAppLocation = {
  type: EUIAction.SET_GEO_APP_LOCATION;
  payload: { latitude: number; longitude: number };
};
export type TResetActionStatus = { type: EUIAction.RESET_ACTION_STATUS };
