import { createReducer } from 'deox';
import { uiActions } from '@/redux/actions';

type TUIState = {
  geoAppLocation?: {
    latitude: number;
    longitude: number;
  };
};

const initialState: TUIState = {
  geoAppLocation: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(uiActions.setGeoLocationApp, (state, { payload }) => ({
    ...state,
    geoAppLocation: {
      latitude: payload.latitude,
      longitude: payload.longitude,
    },
  })),
]);

export default reducer;
