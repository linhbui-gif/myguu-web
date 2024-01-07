import { createReducer } from 'deox';

import { uiActions } from '@/redux/actions';
import { TService } from '@/common/models';
import Helpers from '@/services/helpers';

type TUIState = {
  geoAppLocation?: {
    latitude: number;
    longitude: number;
  };
  cart?: TService[];
  visibleOtherShopWarning?: boolean;
};

const initialState: TUIState = {
  geoAppLocation: undefined,
  cart: Helpers.getCart(),
  visibleOtherShopWarning: false,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(uiActions.setCart, (state, { payload }) => {
    Helpers.storeCart(payload.data);

    return {
      ...state,
      cart: payload?.data,
    };
  }),
  handleAction(uiActions.setVisibleOtherShopWarning, (state, { payload }) => {
    return {
      ...state,
      visibleOtherShopWarning: payload?.data,
    };
  }),
  handleAction(uiActions.setGeoLocationApp, (state, { payload }) => ({
    ...state,
    geoAppLocation: {
      latitude: payload.latitude,
      longitude: payload.longitude,
    },
  })),
]);

export default reducer;
