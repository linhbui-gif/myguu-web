import { createActionCreator } from 'deox';

import { EUIAction } from './constants';
import { TResetActionStatus, TSetCart, TSetGeoAppLocation, TSetVisibleOtherShopWarning } from './types';

export const uiActions = {
  setGeoLocationApp: createActionCreator(
    EUIAction.SET_GEO_APP_LOCATION,
    (resolve) =>
      ({ latitude, longitude }): TSetGeoAppLocation =>
        resolve({ latitude, longitude }),
  ),

  setCart: createActionCreator(
    EUIAction.SET_CART,
    (resolve) =>
      (data): TSetCart =>
        resolve({ data }),
  ),

  setVisibleOtherShopWarning: createActionCreator(
    EUIAction.SET_VISIBLE_OTHER_SHOP_WARNING,
    (resolve) =>
      (data): TSetVisibleOtherShopWarning =>
        resolve({ data }),
  ),

  resetActionStatus: createActionCreator(
    EUIAction.RESET_ACTION_STATUS,
    (resolve) =>
      (actionName: string): TResetActionStatus =>
        resolve({ actionName: actionName.replace('_REQUEST', '') }),
  ),
};
