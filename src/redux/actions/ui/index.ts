import { createActionCreator } from 'deox';

import { EUIAction } from './constants';
import { TResetActionStatus, TSetGeoAppLocation } from './types';

export const uiActions = {
  setGeoLocationApp: createActionCreator(
    EUIAction.SET_GEO_APP_LOCATION,
    (resolve) =>
      ({ latitude, longitude }): TSetGeoAppLocation =>
        resolve({ latitude, longitude }),
  ),

  resetActionStatus: createActionCreator(
    EUIAction.RESET_ACTION_STATUS,
    (resolve) =>
      (actionName: string): TResetActionStatus =>
        resolve({ actionName: actionName.replace('_REQUEST', '') }),
  ),
};
