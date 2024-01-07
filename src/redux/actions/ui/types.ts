import { TService } from '@/common/models';
import { EUIAction } from './constants';

export type TSetGeoAppLocation = {
  type: EUIAction.SET_GEO_APP_LOCATION;
  payload: { latitude: number; longitude: number };
};

export type TSetCart = {
  type: EUIAction.SET_CART;
  payload: { data: TService[] };
};

export type TSetVisibleOtherShopWarning = {
  type: EUIAction.SET_VISIBLE_OTHER_SHOP_WARNING;
  payload: { data: boolean };
};

export type TResetActionStatus = { type: EUIAction.RESET_ACTION_STATUS };
